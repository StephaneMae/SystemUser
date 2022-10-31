import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndigencyPageRoutingModule } from './indigency-routing.module';

import { IndigencyPage } from './indigency.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndigencyPageRoutingModule
  ],
  declarations: [IndigencyPage]
})
export class IndigencyPageModule {}
