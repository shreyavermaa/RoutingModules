import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentCreateComponent } from './payment-create/payment-create.component';
import { PaymentUpdateComponent } from './payment-update/payment-update.component';
import { PaymentTestComponent } from './payment-create/payment-test/payment-test.component';


@NgModule({
  declarations: [
    PaymentCreateComponent,
    PaymentUpdateComponent,
    PaymentTestComponent
  ],
  imports: [
    CommonModule,
    PaymentRoutingModule
  ]
})
export class PaymentModule { }
