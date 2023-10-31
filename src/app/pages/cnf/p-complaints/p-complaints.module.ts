import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PComplaintsPageRoutingModule } from './p-complaints-routing.module';

import { PComplaintsPage } from './p-complaints.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PComplaintsPageRoutingModule
  ],
  declarations: [PComplaintsPage]
})
export class PComplaintsPageModule {}
