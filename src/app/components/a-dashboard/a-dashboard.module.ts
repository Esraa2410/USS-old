import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ADashboardRoutingModule } from './a-dashboard-routing.module';
import { ADashboardComponent } from './a-dashboard.component';


@NgModule({
  declarations: [
    ADashboardComponent
  ],
  imports: [
    CommonModule,
    ADashboardRoutingModule
  ]
})
export class ADashboardModule { }
