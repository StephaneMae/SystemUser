import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CedulaPageRoutingModule } from './cedula-routing.module';

import { CedulaPage } from './cedula.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CedulaPageRoutingModule
  ],
  declarations: [CedulaPage]
})
export class CedulaPageModule {}
