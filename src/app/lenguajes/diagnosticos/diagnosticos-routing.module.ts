import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {DiagnosticosPage} from './diagnosticos.page';
import {DenominacionPage} from './denominacion/denominacion.page';
import {DimensionPage} from './dimension/dimension.page';
import {CategoriaPage} from './categoria/categoria.page';
import {ComponentePage} from './componente/componente.page';
import {SubelementoPage} from './subelemento/subelemento.page';
import {VistaPage} from './vista/vista.page';

const routes: Routes = [
    {
        path: '',
        component: DiagnosticosPage,
        children: [
            {
                path: 'denominacion', component: DenominacionPage
            }, {
                path: 'dimension', component: DimensionPage
            }, {
                path: 'categoria', component: CategoriaPage
            }, {
                path: 'componente', component: ComponentePage
            }, {
                path: 'subelemento', component: SubelementoPage
            }, {
                path: 'vista', component: VistaPage
            }
        ]
    },
    /*{
      path: 'denominacion',
      loadChildren: () => import('./denominacion/denominacion.module').then( m => m.DenominacionPageModule)
    },
    {
      path: 'dimension',
      loadChildren: () => import('./dimension/dimension.module').then( m => m.DimensionPageModule)
    },
    {
      path: 'categoria',
      loadChildren: () => import('./categoria/categoria.module').then( m => m.CategoriaPageModule)
    },
    {
      path: 'componente',
      loadChildren: () => import('./componente/componente.module').then( m => m.ComponentePageModule)
    }*/
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DiagnosticosPageRoutingModule {
}
