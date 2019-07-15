import { VideoGameStore } from '../store/videoGame.store';
import { VideoGameQuery } from '../store/videoGame.query';
import { Game } from '../model/game.model';
import { Injectable } from '@angular/core';
import { guid } from '@datorama/akita';


@Injectable({ providedIn: 'root'})

export class GameService {

    game: Game;

    constructor(
        private VideoGameStore: VideoGameStore,
        private VideoGameQuery: VideoGameQuery
    ) {}

    public createGame(game: Game) {
        this.game.id = guid();
        this.VideoGameStore.add(game);
    }

    public updateGame(game: Game) {
        this.VideoGameStore.update(game.id, game);
    }

    public deleteGame(game: Game) {
        this.VideoGameStore.remove(game);
    }

    public getAll(game: Game) {
        this.VideoGameQuery.getAll();
    }
}

