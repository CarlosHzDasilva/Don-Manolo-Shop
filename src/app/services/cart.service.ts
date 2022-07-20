import { Injectable } from '@angular/core';
import { Cart } from '../models/cart.model';
import { Item } from '../models/item.model';
import { ShippingModel } from '../models/shipping.model';
import { ItemListService } from './item-list.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Cart[] = [];
  myItems: Item[];
  details: ShippingModel = new ShippingModel();

  constructor(private itemsListService: ItemListService) {
    this.getItems();
  }

  getItems() {
    this.itemsListService.getItemList()
      .subscribe((data: Item[]) => this.myItems = data);
  }

  storeItem(item: Item) {
    let total: number = item.quantity * item.price;
    let itemsCart: Cart = new Cart(item.id, item.name, item.quantity, item.price, total);
    if (this.cart.findIndex(element => element.id === itemsCart.id) === -1) {
      let position: number = this.myItems.findIndex(element => element.id === itemsCart.id);

      if (itemsCart.amount >= this.myItems[position].stock) {
        itemsCart.amount = this.myItems[position].stock;
      }

      this.cart.push(itemsCart);
    } else {
      let position: number = this.cart.findIndex(element => element.id === itemsCart.id);
      let itemsPosition: number = this.myItems.findIndex(element => element.id === itemsCart.id);

      if (this.cart[position].amount + itemsCart.amount >= this.myItems[itemsPosition].stock) {
        itemsCart.amount = this.myItems[itemsPosition].stock;
        this.cart[position].total = this.cart[position].amount * this.cart[position].price;
      } else {
        this.cart[position].amount += itemsCart.amount;
        this.cart[position].total = this.cart[position].amount * this.cart[position].price;
      }
    }
  }

  removeItem(cartItem: Cart) {
    let position: number = this.cart.findIndex(element => element.id === cartItem.id);

    this.cart.splice(position, 1);
  }

  getTotalPrice() {
    return this.cart.reduce((accumulated, current) => accumulated + current.total, 0);
  }

  getCartAmount() {
    return this.cart.length;
  }

  getCart() {
    return this.cart;
  }

  detailsChecker(shippingDetails: ShippingModel) {
    if (shippingDetails.name !== undefined && shippingDetails.name.length > 1 && shippingDetails.surname !== undefined && shippingDetails.surname.length > 1 && shippingDetails.door !== undefined && shippingDetails.email !== undefined && shippingDetails.province !== undefined && shippingDetails.street !== undefined && shippingDetails.telephone !== undefined && shippingDetails.zip) {
      return true;
    } else {
      return false;
    }
  }

  storeDetails(shippingDetails: ShippingModel) {
    if (this.detailsChecker(shippingDetails)) {
      this.details = {...shippingDetails};
    }
  }

  getDetails() {
    return this.details;
  }

  reset() {
    this.cart = [];
    this.details = new ShippingModel();
  }
}
