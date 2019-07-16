import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Game } from '../model/game.model';

export interface CartGameState extends EntityState<Game> { }


@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'cartGame' })

export class CartGameStore extends EntityStore<CartGameState> {

    constructor() {
        super();
    }

}

