import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ADashboardComponent } from './a-dashboard.component';

const routes: Routes = [{ path: '', component: ADashboardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ADashboardRoutingModule { }
