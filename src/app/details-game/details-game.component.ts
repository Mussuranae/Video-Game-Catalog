import { Component, OnInit } from '@angular/core';
import { GameService } from '../service/game.service';
import { Game } from '../model/game.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-details-game',
  templateUrl: './details-game.component.html',
  styleUrls: ['./details-game.component.scss']
})
export class DetailsGameComponent implements OnInit {

  game: Game;

  constructor(
      private gameService: GameService,
      private route: ActivatedRoute,
      private router: Router,
      private cartService: CartService
  ) { }

  ngOnInit() {
    /*this.route.paramMap.pipe(
        switchMap((params: ParamMap) =>
        this.gameService.getOneById(this.game.id))
    );*/
    const id = this.route.snapshot.paramMap.get('id');
    this.game = this.gameService.getOneById(id);
  }

  delete(id) {
    this.gameService.deleteGame(this.game);
    this.router.navigate(['/']);
  }

  editGame(id) {
    this.router.navigate(['edit/', this.game.id]);
  }

  addToCart() {
    this.cartService.addGameWanted(this.game);
    window.alert('Game added to your cart');
  }

}
