import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JBillingRoutingModule } from './j-billing-routing.module';
import { JBillingComponent } from './j-billing.component';


@NgModule({
  declarations: [
    JBillingComponent
  ],
  imports: [
    CommonModule,
    JBillingRoutingModule
  ]
})
export class JBillingModule { }
