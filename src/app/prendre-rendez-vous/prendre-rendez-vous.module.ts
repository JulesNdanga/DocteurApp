import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrendreRendezVousPageRoutingModule } from './prendre-rendez-vous-routing.module';

import { PrendreRendezVousPage } from './prendre-rendez-vous.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrendreRendezVousPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PrendreRendezVousPage]
})
export class PrendreRendezVousPageModule {}
