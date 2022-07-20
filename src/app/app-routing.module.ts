import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { ItemEditComponent } from './item-edit/item-edit.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewItemComponent } from './new-item/new-item.component';
import { OrderComponent } from './order/order.component';
import { SaleConfirmationComponent } from './sale-confirmation/sale-confirmation.component';
import { ShippingDetailsComponent } from './shipping-details/shipping-details.component';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: NavbarComponent },
  { path: 'item-list', component: ItemsListComponent },
  { path: 'item-new', component: NewItemComponent },
  { path: 'item/:id', component: ItemEditComponent },
  { path: 'order', component: OrderComponent },
  { path: 'sale-confirmation', component: SaleConfirmationComponent },
  { path: '**', component: ErrorComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
