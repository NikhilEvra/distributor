import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PartnersinfoPageRoutingModule } from './partnersinfo-routing.module';

import { PartnersinfoPage } from './partnersinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PartnersinfoPageRoutingModule
  ],
  declarations: [PartnersinfoPage]
})
export class PartnersinfoPageModule {}
