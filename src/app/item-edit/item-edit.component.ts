import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemListService } from '../services/item-list.service';
import { Item } from '../models/item.model';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {
  item: Item;

  constructor(private itemListService: ItemListService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = <number>params['id'];
      if (id != null) {
        this.loadItem(id);
      }
    })
  }

  loadItem(id: number) {
    this.itemListService.getItem(id)
      .subscribe((data: Item) => this.item = data)
  }

  navigateToList() {
    this.router.navigate(['item-list']);
  }

  updateItem(item: Item) {
    if (item.expirationTime === "") {
      item.expirationTime = null;
    }
    this.itemListService.updateItem(item).subscribe( data => {
      this.router.navigate(['item-list'])
    });
  }

}
