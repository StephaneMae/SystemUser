import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResidencyPageRoutingModule } from './residency-routing.module';

import { ResidencyPage } from './residency.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResidencyPageRoutingModule
  ],
  declarations: [ResidencyPage]
})
export class ResidencyPageModule {}
