import { QueryEntity } from '@datorama/akita';
import { CatalogGameStore, VideoGameState } from './catalogGame.store';
import { Game } from '../model/game.model';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})

export class VideoGameQuery extends QueryEntity<VideoGameState> {

    constructor(protected store: CatalogGameStore) {
        super(store);
    }
}
