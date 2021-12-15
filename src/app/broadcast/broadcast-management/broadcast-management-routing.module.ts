import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BroadcastComponent1Component } from './broadcast-component1/broadcast-component1.component';
import { BroadcastComponent2Component } from './broadcast-component2/broadcast-component2.component';

const routes: Routes = [
  { path: 'create', component: BroadcastComponent1Component },
  { path: 'view/:id', component: BroadcastComponent2Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BroadcastManagementRoutingModule { }
