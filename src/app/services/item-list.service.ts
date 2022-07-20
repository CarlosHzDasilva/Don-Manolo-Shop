import { Item } from '../models/item.model';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
}

const URL_BASE = "http://192.168.1.79:3000/item-list";
const BOX_URL = "http://192.168.1.79:3000/the-box"

@Injectable()
export class ItemListService {

  constructor(private http: HttpClient) {}

  //GET
  getItemList(): Observable<Item[]> {
    return this.http.get<Item[]>(URL_BASE);
  }

  //GET ITEM
  getItem(id: number): Observable<Item> {
    return this.http.get<Item>(`${URL_BASE}/${id}`);
  }

  //POST
  addItem(item: Item): Observable<Item> {
    return this.http.post<Item>(URL_BASE, item, httpOptions);
  }

  //PUT
  updateItem(item: Item): Observable<Item> {
    const url = `${URL_BASE}/${item.id}`;
    return this.http.put<Item>(url, item, httpOptions);
  }

  //DELETE
  deleteItem(id: number): Observable<{}> {
    const url = `${URL_BASE}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  getTheBox(): Observable<Item[]> {
    return this.http.get<Item[]>(BOX_URL);
  }
}
