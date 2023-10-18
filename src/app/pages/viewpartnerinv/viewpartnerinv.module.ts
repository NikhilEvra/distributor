import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewpartnerinvPageRoutingModule } from './viewpartnerinv-routing.module';

import { ViewpartnerinvPage } from './viewpartnerinv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewpartnerinvPageRoutingModule
  ],
  declarations: [ViewpartnerinvPage]
})
export class ViewpartnerinvPageModule {}
