import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {DiagnosticosPageRoutingModule} from './diagnosticos-routing.module';
import {DiagnosticosPage} from './diagnosticos.page';

/*Modulos*/
import {DenominacionPageModule} from './denominacion/denominacion.module';
import {DimensionPageModule} from './dimension/dimension.module';
import {CategoriaPageModule} from './categoria/categoria.module';
import {ComponentePageModule} from './componente/componente.module';
import {SubelementoPageModule} from './subelemento/subelemento.module';
import {VistaPageModule} from './vista/vista.module';

/*Paginas / componentes*/
import {DenominacionPage} from './denominacion/denominacion.page';
import {DimensionPage} from './dimension/dimension.page';
import {CategoriaPage} from './categoria/categoria.page';
import {ComponentePage} from './componente/componente.page';
import {SubelementoPage} from './subelemento/subelemento.page';
import {VistaPage} from './vista/vista.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DiagnosticosPageRoutingModule,
        DenominacionPageModule,
        DimensionPageModule,
        CategoriaPageModule,
        ComponentePageModule,
        SubelementoPageModule,
        VistaPageModule
    ],
    declarations: [
        DiagnosticosPage,
        DenominacionPage,
        DimensionPage,
        CategoriaPage,
        ComponentePage,
        SubelementoPage,
        VistaPage
    ]
})
export class DiagnosticosPageModule {
}
