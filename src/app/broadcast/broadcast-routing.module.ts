import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'management',
    loadChildren: () =>
      import('./broadcast-management/broadcast-management.module').then((m) => m.BroadcastManagementModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BroadcastRoutingModule { }
