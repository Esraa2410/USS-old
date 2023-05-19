import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CChatsComponent } from './c-chats.component';

const routes: Routes = [{ path: '', component: CChatsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CChatsRoutingModule { }
