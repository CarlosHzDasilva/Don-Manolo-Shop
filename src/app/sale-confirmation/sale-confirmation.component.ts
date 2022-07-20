import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../models/cart.model';
import { Item } from '../models/item.model';
import { ShippingModel } from '../models/shipping.model';
import { CartService } from '../services/cart.service';
import { ItemListService } from '../services/item-list.service';

@Component({
  selector: 'app-sale-confirmation',
  templateUrl: './sale-confirmation.component.html',
  styleUrls: ['./sale-confirmation.component.css']
})
export class SaleConfirmationComponent implements OnInit {
  myItems: Item[]
  cart: Cart[];
  details: ShippingModel;

  constructor(private cartService: CartService, private itemsListService: ItemListService, private router: Router) { }

  ngOnInit() {
    this.getCart();
    this.getDetails();
    this.getItems();
  }

  getCart() {
    this.cart = this.cartService.getCart();
  }

  getDetails() {
    this.details = this.cartService.getDetails();
  }

  getItems() {
    this.itemsListService.getItemList()
      .subscribe((data: Item[]) => this.myItems = data)
  }

  getPrice() {
    return this.cartService.getTotalPrice();
  }

  navigateToList() {
    this.router.navigate(['item-list']);
  }

  navigateToInit() {
    this.cartService.reset();
    this.router.navigate(['home']);
  }
}
