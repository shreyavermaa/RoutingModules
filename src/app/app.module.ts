import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { OrderModule } from './order/order.module';

// import { PaymentModule } from './payment/payment.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // PaymentModule, don't include these two feature modules here to stop eager loading
    // OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
