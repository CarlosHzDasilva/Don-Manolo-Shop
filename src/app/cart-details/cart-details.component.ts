import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cart } from '../models/cart.model';
import { Item } from '../models/item.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {
  @Input() cartItem: Cart;
  @Output() cartItemEmission: EventEmitter<Cart> = new EventEmitter<Cart>();

  constructor() { }

  ngOnInit() {
  }

  emitRemove(cartItem: Cart) {
    this.cartItemEmission.emit(cartItem);
  }

}
