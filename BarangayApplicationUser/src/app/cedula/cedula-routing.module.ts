import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CedulaPage } from './cedula.page';

const routes: Routes = [
  {
    path: '',
    component: CedulaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CedulaPageRoutingModule {}
