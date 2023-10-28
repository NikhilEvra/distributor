import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PartnerpoPageRoutingModule } from './partnerpo-routing.module';

import { PartnerpoPage } from './partnerpo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PartnerpoPageRoutingModule
  ],
  declarations: [PartnerpoPage]
})
export class PartnerpoPageModule {}
