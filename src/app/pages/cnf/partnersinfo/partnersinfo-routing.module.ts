import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PartnersinfoPage } from './partnersinfo.page';

const routes: Routes = [
  {
    path: '',
    component: PartnersinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartnersinfoPageRoutingModule {}
