import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentCreateComponent } from './payment-create/payment-create.component';
import { PaymentUpdateComponent } from './payment-update/payment-update.component';


@NgModule({
  declarations: [
    PaymentCreateComponent,
    PaymentUpdateComponent
  ],
  imports: [
    CommonModule,
    PaymentRoutingModule
  ]
})
export class PaymentModule { }
