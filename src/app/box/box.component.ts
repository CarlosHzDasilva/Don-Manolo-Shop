import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../models/item.model';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
  @Input() item: Item;
  @Input() theBox: Item[];
  @Output() boxApocalipse: EventEmitter<Boolean> = new EventEmitter<Boolean>();

  constructor() { }

  apocalipseKey: boolean = false;

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

  boxCheck(item: Item) {
    if (item.stock === 0) {
      this.apocalipseKey = true;
      this.apocalipse();
    }
  }

  apocalipse() {
    this.boxApocalipse.emit(this.apocalipseKey);
  }
}
