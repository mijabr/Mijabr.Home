using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace Mijabr.Home
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddAuthentication("Bearer")
                .AddJwtBearer("Bearer", options =>
                {
                    options.Authority = "http://identity/";
                    options.RequireHttpsMetadata = false;
                    options.Audience = "home";
                });

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
                Console.WriteLine($"Home Request: {context.Request.Path}");
                await next();
            });

            app.Use(async (context, next) =>
            {
                if (context.Request.Path.StartsWithSegments(new PathString("/home")))
                {
                    Console.WriteLine($"Home Request 404 candidate: {context.Request.Path}");
                    await next();
                    if (context.Response.StatusCode == 404)
                    {
                        Console.WriteLine($"Home Request forward to /home/index.html: {context.Request.Path}");
                        context.Request.Path = "/home/index.html";
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

            //app.UseEndpoints(endpoints =>
            //{
            //    endpoints.MapGet("/", async context =>
            //    {
            //        await context.Response.WriteAsync("Hello World!");
            //    });
            //});
        }
    }
}
