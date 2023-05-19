import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HDevicesRoutingModule } from './h-devices-routing.module';
import { HDevicesComponent } from './h-devices.component';


@NgModule({
  declarations: [
    HDevicesComponent
  ],
  imports: [
    CommonModule,
    HDevicesRoutingModule
  ]
})
export class HDevicesModule { }
