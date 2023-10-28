import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PartnerticketsPage } from './partnertickets.page';

const routes: Routes = [
  {
    path: '',
    component: PartnerticketsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartnerticketsPageRoutingModule {}
