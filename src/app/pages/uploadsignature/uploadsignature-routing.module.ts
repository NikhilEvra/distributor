import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UploadsignaturePage } from './uploadsignature.page';

const routes: Routes = [
  {
    path: '',
    component: UploadsignaturePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploadsignaturePageRoutingModule {}
