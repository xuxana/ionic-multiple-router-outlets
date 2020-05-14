import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DimensionPage } from './dimension.page';
import {SubelementoPage} from '../subelemento/subelemento.page';

const routes: Routes = [
  {
    path: '',
    component: DimensionPage,
    children: [
      {
        path: 'subelemento', component: SubelementoPage
      },
    ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DimensionPageRoutingModule {}
