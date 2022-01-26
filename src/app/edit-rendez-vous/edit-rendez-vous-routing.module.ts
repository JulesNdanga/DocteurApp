import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditRendezVousPage } from './edit-rendez-vous.page';

const routes: Routes = [
  {
    path: '',
    component: EditRendezVousPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditRendezVousPageRoutingModule {}
