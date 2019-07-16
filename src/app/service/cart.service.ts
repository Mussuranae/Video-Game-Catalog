import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class CartService {

    gameWanted = [];

    constructor() {}

    addToCart(game) {
        this.gameWanted.push(game);
    }

    getGameWanted() {
        return this.gameWanted;
    }

    clearCart() {
        this.gameWanted = [];
        return this.gameWanted;
    }
}
