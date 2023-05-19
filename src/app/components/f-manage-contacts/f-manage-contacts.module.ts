import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FManageContactsRoutingModule } from './f-manage-contacts-routing.module';
import { FManageContactsComponent } from './f-manage-contacts.component';


@NgModule({
  declarations: [
    FManageContactsComponent
  ],
  imports: [
    CommonModule,
    FManageContactsRoutingModule
  ]
})
export class FManageContactsModule { }
