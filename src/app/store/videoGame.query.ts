import { QueryEntity } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { CatalogGameStore, VideoGameState } from './catalogGame.store';

@Injectable({providedIn: 'root'})

export class VideoGameQuery extends QueryEntity<VideoGameState> {

    constructor(protected store: CatalogGameStore) {
        super(store);
    }
}
