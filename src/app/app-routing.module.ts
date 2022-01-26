import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  
  {
    path: 'prendre-rendez-vous',
    loadChildren: () => import('./prendre-rendez-vous/prendre-rendez-vous.module').then( m => m.PrendreRendezVousPageModule)
  },
  {
    path: 'edit-rendez-vous/:id',
    loadChildren: () => import('./edit-rendez-vous/edit-rendez-vous.module').then( m => m.EditRendezVousPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
