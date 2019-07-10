import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface VideoGameState {
   key: string;
}

export function createInitialState(): VideoGameState {
  return {
    key: ''
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'video-game' })
export class VideoGameStore extends Store<VideoGameState> {

  constructor() {
    super(createInitialState());
  }

}

