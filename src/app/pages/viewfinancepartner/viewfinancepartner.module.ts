import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewfinancepartnerPageRoutingModule } from './viewfinancepartner-routing.module';

import { ViewfinancepartnerPage } from './viewfinancepartner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewfinancepartnerPageRoutingModule
  ],
  declarations: [ViewfinancepartnerPage]
})
export class ViewfinancepartnerPageModule {}
