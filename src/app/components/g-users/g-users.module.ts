import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GUsersRoutingModule } from './g-users-routing.module';
import { GUsersComponent } from './g-users.component';


@NgModule({
  declarations: [
    GUsersComponent
  ],
  imports: [
    CommonModule,
    GUsersRoutingModule
  ]
})
export class GUsersModule { }
