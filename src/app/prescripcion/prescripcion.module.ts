import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PrescripcionPage } from './prescripcion.page';

import { PrescripcionPageRoutingModule } from './prescripcion-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: PrescripcionPage }]),
    PrescripcionPageRoutingModule,
  ],
  declarations: [PrescripcionPage]
})
export class PrescripcionPageModule {}
