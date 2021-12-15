import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderCreateComponent } from './order-create/order-create.component';
import { OrderUpdateComponent } from './order-update/order-update.component';


@NgModule({
  declarations: [
    OrderCreateComponent,
    OrderUpdateComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule
  ]
})
export class OrderModule { }
