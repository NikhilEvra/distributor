import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UploadsignaturePageRoutingModule } from './uploadsignature-routing.module';

import { UploadsignaturePage } from './uploadsignature.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UploadsignaturePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UploadsignaturePage]
})
export class UploadsignaturePageModule {}
