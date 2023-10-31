import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { POpenComplaintsPage } from './p-open-complaints.page';

const routes: Routes = [
  {
    path: '',
    component: POpenComplaintsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class POpenComplaintsPageRoutingModule {}
