import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LenguajesPage } from './lenguajes.page';

const routes: Routes = [
  {
    path: '',
    component: LenguajesPage,
  },
  {
    path: 'diagnosticos',
    loadChildren: () => import('./diagnosticos/diagnosticos.module').then( m => m.DiagnosticosPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LenguajesPageRoutingModule {}
