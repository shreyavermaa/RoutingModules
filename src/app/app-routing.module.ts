import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//lazy loading the two feature modules
const routes: Routes = [
  {
    path: 'payment',
    loadChildren: () =>
      import('./payment/payment.module').then((m) => m.PaymentModule),
  },
  {
    path: 'order',
    loadChildren: () =>
      import('./order/order.module').then((m) => m.OrderModule),
  },
  {
    path: 'broadcast',
    loadChildren: () =>
      import('./broadcast/broadcast.module').then((m) => m.BroadcastModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
