import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatnerinvPageRoutingModule } from './patnerinv-routing.module';

import { PatnerinvPage } from './patnerinv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatnerinvPageRoutingModule
  ],
  declarations: [PatnerinvPage]
})
export class PatnerinvPageModule {}
