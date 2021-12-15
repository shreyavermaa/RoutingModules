import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentCreateComponent } from './payment-create/payment-create.component';
import { PaymentUpdateComponent } from './payment-update/payment-update.component'

const routes: Routes = [
  { path: 'create', component: PaymentCreateComponent  },
  { path: 'update/:id', component: PaymentUpdateComponent  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
