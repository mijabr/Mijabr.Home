import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroMenuComponent } from './intro-menu/intro-menu.component';
import { LogOutComponent } from './log-out/log-out.component';
import { RedirectComponent } from './shared/component/redirect/redirect.component';

const routes: Routes = [
  { path: '', redirectTo: '/intro-menu', pathMatch: 'full' },
  { path: 'intro-menu', component: IntroMenuComponent },
  { path: 'logout', component: LogOutComponent },
  { path: 'redirect', component: RedirectComponent }

  //,
  // {
  //   path: 'about',
  //   loadChildren: 'app/about/module/about.module#AboutModule'
  // },
  // {
  //   path: 'recipes',
  //   loadChildren: 'app/recipe/module/recipe.module#RecipeModule'
  // },
  // {
  //   path: 'scrabble',
  //   loadChildren: 'app/scrabble/module/scrabble.module#ScrabbleModule'
  // },
  // {
  //   path: 'words',
  //   loadChildren: 'app/words/module/words.module#WordsModule'
  // },
  // {
  //   path: 'animatus',
  //   loadChildren: 'app/animatus/module/animatus.module#AnimatusModule'
  // },
  // {
  //   path: 'racing',
  //   loadChildren: 'app/racing/module/racing.module#RacingModule'
  // },
  // {
  //   path: '**',
  //   redirectTo: '/links'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
