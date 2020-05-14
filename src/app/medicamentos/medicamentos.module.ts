import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MedicamentosPage } from './medicamentos.page';


import { MedicamentosPageRoutingModule } from './medicamentos-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    MedicamentosPageRoutingModule
  ],
  declarations: [MedicamentosPage]
})
export class MedicamentosPageModule {}
