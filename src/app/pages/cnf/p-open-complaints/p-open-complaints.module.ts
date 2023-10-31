import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { POpenComplaintsPageRoutingModule } from './p-open-complaints-routing.module';

import { POpenComplaintsPage } from './p-open-complaints.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    POpenComplaintsPageRoutingModule
  ],
  declarations: [POpenComplaintsPage]
})
export class POpenComplaintsPageModule {}
