import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import es from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { TotalPipe } from './total.pipe';
import { ExchangePipe } from './exchange.pipe';
import { ItemsListComponent } from './items-list/items-list.component';
import { TotalPricePipe } from './total-price.pipe';
import { FormsModule } from '@angular/forms';
import { ItemListService } from './services/item-list.service'
import { HttpClientModule } from '@angular/common/http';
import { ItemComponent } from './item/item.component';
import { BoxComponent } from './box/box.component';
import { ItemEditComponent } from './item-edit/item-edit.component';
import { NewItemComponent } from './new-item/new-item.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OrderComponent } from './order/order.component';
import { ErrorComponent } from './error/error.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { ShippingDetailsComponent } from './shipping-details/shipping-details.component';
import { CartService } from './services/cart.service';
import { SaleConfirmationComponent } from './sale-confirmation/sale-confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    TotalPipe,
    ExchangePipe,
    ItemsListComponent,
    TotalPricePipe,
    ItemComponent,
    BoxComponent,
    ItemEditComponent,
    NewItemComponent,
    NavbarComponent,
    OrderComponent,
    ErrorComponent,
    CartDetailsComponent,
    ShippingDetailsComponent,
    SaleConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'es-ES'}, ItemListService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
registerLocaleData(es);
