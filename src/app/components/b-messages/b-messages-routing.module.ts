import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BMessagesComponent } from './b-messages.component';

const routes: Routes = [{ path: '', component: BMessagesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BMessagesRoutingModule { }
