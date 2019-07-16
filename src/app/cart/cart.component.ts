import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  gameWanted;

  constructor(
      private cartService: CartService
  ) {
    this.gameWanted = this.cartService.getGameWanted();
  }

  ngOnInit() {
    console.log(this.gameWanted);

  }

}
