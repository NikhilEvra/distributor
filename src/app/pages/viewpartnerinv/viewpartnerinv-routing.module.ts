import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewpartnerinvPage } from './viewpartnerinv.page';

const routes: Routes = [
  {
    path: '',
    component: ViewpartnerinvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewpartnerinvPageRoutingModule {}
