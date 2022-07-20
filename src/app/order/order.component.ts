import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from '../models/cart.model';
import { ShippingModel } from '../models/shipping.model';
import { CartService } from '../services/cart.service';
import { ItemListService } from '../services/item-list.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  itemsCart: Cart[];

  constructor(private cartService: CartService, private itemListService: ItemListService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getCart();
  }

  getCart() {
    this.itemsCart = this.cartService.getCart();
  }

  removeItems(cartItem: Cart) {
    this.cartService.removeItem(cartItem);
  }

  navigateToInit() {
    this.router.navigate(['home']);
  }

  navigateToList() {
    this.router.navigate(['item-list']);
  }

  sendDetails(shippingDetails: ShippingModel) {
    this.cartService.storeDetails(shippingDetails);
    this.router.navigate(['sale-confirmation']);
  }
}
