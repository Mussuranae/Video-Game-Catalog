import { Component, OnInit } from '@angular/core';
import { GameService } from '../service/game.service';
import { Game } from '../model/game.model';

@Component({
  selector: 'app-video-game',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  games: Game[];
  id;

  constructor(
      private gameService: GameService,
  ) {  }

  ngOnInit() {
    this.gameService.getAll().subscribe(games => {
      this.games = games;
    });
  }
}
