import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DCompaginsComponent } from './d-compagins.component';

const routes: Routes = [{ path: '', component: DCompaginsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DCompaginsRoutingModule { }
