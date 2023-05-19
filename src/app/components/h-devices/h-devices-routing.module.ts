import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HDevicesComponent } from './h-devices.component';

const routes: Routes = [{ path: '', component: HDevicesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HDevicesRoutingModule { }
