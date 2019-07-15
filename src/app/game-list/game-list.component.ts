import { Component, OnInit } from '@angular/core';
import { GameService } from '../service/game.service';

@Component({
  selector: 'app-video-game',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  constructor(
      private GameService: GameService
  ) { }

  ngOnInit() {}

}
