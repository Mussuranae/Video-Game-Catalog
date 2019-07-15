import { QueryEntity } from '@datorama/akita';
import { VideoGameStore, VideoGameState } from './videoGame.store';
import { Game } from '../model/game.model';


export class VideoGameQuery extends QueryEntity<VideoGameState, Game> {

    constructor(protected store: VideoGameStore) {
        super(store);
    }
}
