import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GUsersComponent } from './g-users.component';

const routes: Routes = [{ path: '', component: GUsersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GUsersRoutingModule { }
