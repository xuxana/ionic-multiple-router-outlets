import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DenominacionPage } from './denominacion.page';

const routes: Routes = [
  {
    path: '',
    component: DenominacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DenominacionPageRoutingModule {}
