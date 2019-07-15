import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Game } from '../model/game.model';

export interface VideoGameState extends EntityState<Game> { }


@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'videoGame' })

export class VideoGameStore extends EntityStore<VideoGameState> {

    constructor() {
        super();
    }

}

