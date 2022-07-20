import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item.model';
import { ItemListService } from '../services/item-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {
  newItem:Item = new Item();

  constructor(private itemListService: ItemListService, private router: Router) { }

  ngOnInit(): void {
  }

  addNewItem(item: Item) {
    this.itemListService.addItem(item)
      .subscribe(data => {
        this.router.navigate(['home']);
      });
  }

  createNewItem(newItem: Item){
    newItem.image = "default.jpg";
    newItem.selected = false;
    newItem.quantity = 0;

    if (newItem.expirationTime === undefined) {
      newItem.expirationTime = null;
    }

    this.addNewItem(newItem);
  }
}
