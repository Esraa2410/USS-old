import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ETemplatesRoutingModule } from './e-templates-routing.module';
import { ETemplatesComponent } from './e-templates.component';


@NgModule({
  declarations: [
    ETemplatesComponent
  ],
  imports: [
    CommonModule,
    ETemplatesRoutingModule
  ]
})
export class ETemplatesModule { }
