import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VideoGameComponent} from './video-game/video-game.component';
import {HomePageComponent} from './home-page/home-page.component';

const routes: Routes = [
    { path: '', component: HomePageComponent},
    { path: 'gameslist', component: VideoGameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
