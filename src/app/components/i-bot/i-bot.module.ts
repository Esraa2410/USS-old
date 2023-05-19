import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IBotRoutingModule } from './i-bot-routing.module';
import { IBotComponent } from './i-bot.component';


@NgModule({
  declarations: [
    IBotComponent
  ],
  imports: [
    CommonModule,
    IBotRoutingModule
  ]
})
export class IBotModule { }
