import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LenguajesPage } from './lenguajes.page';

import { LenguajesPageRoutingModule } from './lenguajes-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    LenguajesPageRoutingModule
  ],
  declarations: [LenguajesPage]
})
export class LenguajesPageModule {}
