import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddcomplaintsPageRoutingModule } from './addcomplaints-routing.module';

import { AddcomplaintsPage } from './addcomplaints.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddcomplaintsPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [AddcomplaintsPage]
})
export class AddcomplaintsPageModule {}
