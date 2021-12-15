import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderCreateComponent } from './order-create/order-create.component';
import { OrderUpdateComponent } from './order-update/order-update.component';

const routes: Routes = [
  {path: 'create', component: OrderCreateComponent},
  {path: 'update/:id', component: OrderUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
