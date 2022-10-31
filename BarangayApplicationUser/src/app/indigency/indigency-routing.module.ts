import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndigencyPage } from './indigency.page';

const routes: Routes = [
  {
    path: '',
    component: IndigencyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndigencyPageRoutingModule {}
