import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequestingPageRoutingModule } from './requesting-routing.module';

import { RequestingPage } from './requesting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RequestingPageRoutingModule
  ],
  declarations: [RequestingPage]
})
export class RequestingPageModule {}
