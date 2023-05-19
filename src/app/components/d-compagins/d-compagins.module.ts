import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DCompaginsRoutingModule } from './d-compagins-routing.module';
import { DCompaginsComponent } from './d-compagins.component';


@NgModule({
  declarations: [
    DCompaginsComponent
  ],
  imports: [
    CommonModule,
    DCompaginsRoutingModule
  ]
})
export class DCompaginsModule { }
