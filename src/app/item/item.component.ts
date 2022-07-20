import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../models/item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: Item;
  @Input() theBox:Item[];
  @Output() deleteItem: EventEmitter<Item> = new EventEmitter<Item>();
  @Output() updateItem: EventEmitter<Item> = new EventEmitter<Item>();
  @Output() cartItem: EventEmitter<Item> = new EventEmitter<Item>();

  constructor( private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  upQuantity(item: Item) {
    if (item.stock > 0) {
      item.quantity++;
      item.stock--;
    }
  }

  downQuantity(item: Item) {
    if (item.quantity > 0) {
      item.quantity--;
      item.stock++;
    }
  }

  itemSelected(item: Item) {
    if(item.stock !== 0) {
    item.selected = !item.selected;
    }
  }

  itemCheck(item: Item) {
    if (item.quantity >= item.stock) {
      item.quantity = item.stock;
    } else if (item.quantity < 0) {
      item.quantity = 0;
    }
    item.stock -= item.quantity;
  }

  navigateToEdit(id: number) {
    this.router.navigate(['item', id]);
  }

  emitDelete(item: Item) {
    this.deleteItem.emit(item);
  }

  emitUpdate(item: Item) {
    this.updateItem.emit(item);
  }

  emitCart(item: Item) {
    this.cartItem.emit(item);
  }
}
