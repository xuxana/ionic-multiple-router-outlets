import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'lenguajes',
        loadChildren: () => import('../lenguajes/lenguajes.module').then(m => m.LenguajesPageModule)
      },
      {
        path: 'medicamentos',
        loadChildren: () => import('../medicamentos/medicamentos.module').then(m => m.MedicamentosPageModule)
      },
      {
        path: 'prescripcion',
        loadChildren: () => import('../prescripcion/prescripcion.module').then(m => m.PrescripcionPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/lenguajes',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/lenguajes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
