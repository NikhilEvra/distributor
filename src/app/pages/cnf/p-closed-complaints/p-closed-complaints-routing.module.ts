import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PClosedComplaintsPage } from './p-closed-complaints.page';

const routes: Routes = [
  {
    path: '',
    component: PClosedComplaintsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PClosedComplaintsPageRoutingModule {}
