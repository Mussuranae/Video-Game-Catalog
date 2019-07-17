import { Injectable } from '@angular/core';
import { Game } from '../model/game.model';
import { CartGameStore } from '../store/cartGame.store';
import { GameCartQuery } from '../store/gameCart.query';

@Injectable({ providedIn: 'root' })

export class CartService {

    constructor(
        private cartStore: CartGameStore,
        private cartQuery: GameCartQuery
    ) {}

    public addGameWanted(gameWanted: Game) {
        this.cartStore.add(gameWanted);
    }

    public deleteGameWanted(gameWanted: Game) {
        this.cartStore.remove(gameWanted.id);
    }

    public getAll() {
        return this.cartQuery.selectAll();
    }
}
