import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewfinancepartnerPage } from './viewfinancepartner.page';

const routes: Routes = [
  {
    path: '',
    component: ViewfinancepartnerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewfinancepartnerPageRoutingModule {}
