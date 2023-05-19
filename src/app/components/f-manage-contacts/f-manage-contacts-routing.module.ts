import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FManageContactsComponent } from './f-manage-contacts.component';

const routes: Routes = [{ path: '', component: FManageContactsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FManageContactsRoutingModule { }
