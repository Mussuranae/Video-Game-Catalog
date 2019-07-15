import { CatalogGameStore } from '../store/catalogGame.store';
import { VideoGameQuery } from '../store/videoGame.query';
import { Game } from '../model/game.model';
import { Injectable } from '@angular/core';
import { guid } from '@datorama/akita';


@Injectable({ providedIn: 'root'})

export class GameService {

    game: Game;

    constructor(
        private catalogGameStore: CatalogGameStore,
        private videoGameQuery: VideoGameQuery
    ) {}

    public createGame(game: Game) {
        game.id = guid();
        this.catalogGameStore.add(game);
    }

    public updateGame(game: Game) {
        this.catalogGameStore.update(game.id, game);
    }

    public deleteGame(game: Game) {
        this.catalogGameStore.remove(game.id);
    }

    public getAll() {
       return this.videoGameQuery.selectAll();
    }

    public getOneById(id) {
        return this.videoGameQuery.getEntity(id);
    }
}

