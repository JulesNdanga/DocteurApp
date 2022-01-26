import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditRendezVousPageRoutingModule } from './edit-rendez-vous-routing.module';

import { EditRendezVousPage } from './edit-rendez-vous.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EditRendezVousPageRoutingModule
  ],
  declarations: [EditRendezVousPage]
})
export class EditRendezVousPageModule {}
