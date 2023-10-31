import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PClosedComplaintsPageRoutingModule } from './p-closed-complaints-routing.module';

import { PClosedComplaintsPage } from './p-closed-complaints.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PClosedComplaintsPageRoutingModule
  ],
  declarations: [PClosedComplaintsPage]
})
export class PClosedComplaintsPageModule {}
