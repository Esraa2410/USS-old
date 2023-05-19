import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IBotComponent } from './i-bot.component';

const routes: Routes = [{ path: '', component: IBotComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IBotRoutingModule { }
