import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JBillingComponent } from './j-billing.component';

const routes: Routes = [{ path: '', component: JBillingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JBillingRoutingModule { }
