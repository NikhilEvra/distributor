import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatnerinvPage } from './patnerinv.page';

const routes: Routes = [
  {
    path: '',
    component: PatnerinvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatnerinvPageRoutingModule {}
