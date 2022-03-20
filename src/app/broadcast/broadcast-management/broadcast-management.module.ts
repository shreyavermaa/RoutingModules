import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BroadcastManagementRoutingModule } from './broadcast-management-routing.module';
import { BroadcastComponent1Component } from './broadcast-component1/broadcast-component1.component';
import { BroadcastComponent2Component } from './broadcast-component2/broadcast-component2.component';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    BroadcastComponent1Component,
    BroadcastComponent2Component,
    TestComponent
  ],
  imports: [
    CommonModule,
    BroadcastManagementRoutingModule
  ]
})
export class BroadcastManagementModule { }
