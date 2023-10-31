import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PComplaintsPage } from './p-complaints.page';

const routes: Routes = [
  {
    path: '',
    component: PComplaintsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PComplaintsPageRoutingModule {}
