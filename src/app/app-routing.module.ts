import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'A-Dashboard',
    loadChildren: () =>
      import('./components/a-dashboard/a-dashboard.module').then(
        (m) => m.ADashboardModule
      ),
  },
  {
    path: 'B-messages',
    loadChildren: () =>
      import('./components/b-messages/b-messages.module').then(
        (m) => m.BMessagesModule
      ),
  },
  {
    path: 'C-chats',
    loadChildren: () =>
      import('./components/c-chats/c-chats.module').then((m) => m.CChatsModule),
  },
  {
    path: 'D-compagins',
    loadChildren: () =>
      import('./components/d-compagins/d-compagins.module').then(
        (m) => m.DCompaginsModule
      ),
  },
  {
    path: 'E-templates',
    loadChildren: () =>
      import('./components/e-templates/e-templates.module').then(
        (m) => m.ETemplatesModule
      ),
  },
  {
    path: 'F-manage-contacts',
    loadChildren: () =>
      import('./components/f-manage-contacts/f-manage-contacts.module').then(
        (m) => m.FManageContactsModule
      ),
  },
  {
    path: 'G-users',
    loadChildren: () =>
      import('./components/g-users/g-users.module').then((m) => m.GUsersModule),
  },
  {
    path: 'H-devices',
    loadChildren: () =>
      import('./components/h-devices/h-devices.module').then(
        (m) => m.HDevicesModule
      ),
  },
  {
    path: 'I-Bot',
    loadChildren: () =>
      import('./components/i-bot/i-bot.module').then((m) => m.IBotModule),
  },
  {
    path: 'J-billing',
    loadChildren: () =>
      import('./components/j-billing/j-billing.module').then(
        (m) => m.JBillingModule
      ),
  },
  // ###########################
  {path:'' ,redirectTo:"A-Dashboard", pathMatch:"full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
