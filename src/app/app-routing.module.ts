import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameListComponent } from './game-list/game-list.component';
import { CreateGameComponent } from './create-game/create-game.component';
import { DetailsGameComponent } from './details-game/details-game.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
    { path: 'edit/:id', component: CreateGameComponent},
    { path: 'game/:id', component: DetailsGameComponent},
    { path: 'new', component: CreateGameComponent },
    { path: 'cart', component: CartComponent},
    { path: '', component: GameListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
