using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;
using Microsoft.AspNetCore.Mvc;

namespace Mijabr.Home
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            var host = System.Environment.GetEnvironmentVariable("host") ?? "localtest.me";
            Console.WriteLine($"Using hosty {host}");

            services.AddCors(options =>
            {
                options.AddPolicy("CORS",
                    builder => builder
                        .SetIsOriginAllowed(origin =>
                        {
                            Console.WriteLine($"checking CORS for {origin}:{host}:{origin.EndsWith(host)}");
                            return origin.EndsWith(host);
                        })
                        .AllowAnyMethod()
                        .AllowCredentials()
                        .AllowAnyHeader()
                        .Build());
            });

            services.AddAuthentication("Bearer")
                .AddJwtBearer("Bearer", options =>
                {
                    options.Authority = "http://identity";
                    options.RequireHttpsMetadata = false;
                    options.Audience = ProxyRoute;
                });

            //services.Configure<MvcOptions>(options =>
            //{
            //    options.Filters.Add(new CorsAuthorizationFilterFactory("CORS"));
            //});

            services.AddControllers();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.Use(async (context, next) =>
            {
                Console.WriteLine($"{ProxyRoute} Request: {context.Request.Path}");
                await next();
            });

            app.Use(async (context, next) =>
            {
                if (context.Request.Path.StartsWithSegments(new PathString($"/{ProxyRoute}")))
                {
                    await next();
                    if (context.Response.StatusCode == 404)
                    {
                        context.Request.Path = $"/{ProxyRoute}/index.html";
                        await next();
                    }
                }
            });

            app.UseRouting();

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseStaticFiles();

            app.UseEndpoints(endpoints =>
                endpoints.MapDefaultControllerRoute()
            );

            app.UseCors("CORS");
        }

        private static string ProxyRoute => "home";
    }
}
