import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface VideoGameState {
    key: string;
    name: string;
}

export function createInitialState(): VideoGameState {
    return {
        key: '',
        name: string
    };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'videoGame' })

export class VideoGameStore extends Store<VideoGameState> {

    constructor() {
        super(createInitialState());
    }

}

