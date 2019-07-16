import { QueryEntity } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { CartGameState, CartGameStore } from './cartGame.store';

@Injectable({providedIn: 'root'})

export class GameCartQuery extends QueryEntity<CartGameState> {

    constructor(protected store: CartGameStore) {
        super(store);
    }
}
