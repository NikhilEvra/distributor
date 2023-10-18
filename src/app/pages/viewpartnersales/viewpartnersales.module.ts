import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewpartnersalesPageRoutingModule } from './viewpartnersales-routing.module';

import { ViewpartnersalesPage } from './viewpartnersales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewpartnersalesPageRoutingModule
  ],
  declarations: [ViewpartnersalesPage]
})
export class ViewpartnersalesPageModule {}
