import { Component, Input, OnInit, Output } from '@angular/core';
import { Item } from '../models/item.model';
import { ItemListService } from '../services/item-list.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
  @Input() item: Item;
  myItems:Item[];
  theBox:Item[];

  constructor(private itemListService: ItemListService, private route: ActivatedRoute, private router: Router, private cartService: CartService) { }

  ngOnInit() {
    this.loadItems();
    this.loadBox();
  }

  loadItems() {
    this.itemListService.getItemList()
    .subscribe((data: Item[]) => this.myItems = data)
  }

  loadBox() {
    this.itemListService.getTheBox()
    .subscribe((data: Item[]) => this.theBox = data)
  }

  shopInit() {
    this.myItems?.forEach(element => {
      element.selected = false;
    })
  }

  deleteItem(item: Item) {
    this.itemListService.deleteItem(item.id)
      .subscribe(
        data => {
          this.myItems = this.myItems.filter(el => {return el.id !== item.id});
        }
      );
  }

  navigateToInit() {
    this.router.navigate(["home"]);
  }

  navigateToOrder() {
    this.router.navigate(['order'])
  }

  cartManager(item: Item) {
    if (item.quantity > 0) {
      this.cartService.storeItem(item);
    }
  }

  getAmount() {
    return this.cartService.getCartAmount();
  }

  totalItems() {
    return this.myItems.reduce((acumulado, myItem) => acumulado + myItem.stock, 0);
  }

  boxApocalipse(key: Boolean) {
    if (key === true) {
      this.myItems.forEach(element => element.stock = 0)
    }
  }
}
