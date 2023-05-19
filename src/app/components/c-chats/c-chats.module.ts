import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CChatsRoutingModule } from './c-chats-routing.module';
import { CChatsComponent } from './c-chats.component';


@NgModule({
  declarations: [
    CChatsComponent
  ],
  imports: [
    CommonModule,
    CChatsRoutingModule
  ]
})
export class CChatsModule { }
