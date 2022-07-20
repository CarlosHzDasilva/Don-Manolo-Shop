import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ShippingModel } from '../models/shipping.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-shipping-details',
  templateUrl: './shipping-details.component.html',
  styleUrls: ['./shipping-details.component.css']
})
export class ShippingDetailsComponent implements OnInit {
  shippingDetails: ShippingModel = new ShippingModel();
  @Output() detailsEmit: EventEmitter<ShippingModel> = new EventEmitter<ShippingModel>();

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  getTotalPrice() {
    return this.cartService.getTotalPrice();
  }

  sendShippingDetails(details: ShippingModel) {
    this.detailsEmit.emit(details);
  }
}
