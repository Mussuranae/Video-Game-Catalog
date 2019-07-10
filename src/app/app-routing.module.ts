import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoGameComponent } from './video-game/video-game.component';
import { CreateGameComponent } from './create-game/create-game.component';

const routes: Routes = [
    { path: '', component: VideoGameComponent },
    { path: 'new', component: CreateGameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
