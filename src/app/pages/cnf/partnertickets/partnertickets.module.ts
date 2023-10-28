import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PartnerticketsPageRoutingModule } from './partnertickets-routing.module';

import { PartnerticketsPage } from './partnertickets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PartnerticketsPageRoutingModule
  ],
  declarations: [PartnerticketsPage]
})
export class PartnerticketsPageModule {}
