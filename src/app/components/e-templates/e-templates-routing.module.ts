import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ETemplatesComponent } from './e-templates.component';

const routes: Routes = [{ path: '', component: ETemplatesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ETemplatesRoutingModule { }
