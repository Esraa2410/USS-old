import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BMessagesRoutingModule } from './b-messages-routing.module';
import { BMessagesComponent } from './b-messages.component';


@NgModule({
  declarations: [
    BMessagesComponent
  ],
  imports: [
    CommonModule,
    BMessagesRoutingModule
  ]
})
export class BMessagesModule { }
