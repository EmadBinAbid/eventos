import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  { 
    path: 'settings', 
    loadChildren: './settings/settings.module#SettingsPageModule' 
  },
  { 
    path: 'events', 
    loadChildren: './events/events.module#EventsPageModule'
  },
  { path: 'account', loadChildren: './account/account.module#AccountPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'events/event-list', loadChildren: './event-list/event-list.module#EventListPageModule' },
  { path: 'events/new-event', loadChildren: './new-event/new-event.module#NewEventPageModule' },
  { path: 'events/event-list/event-profile', loadChildren: './event-profile/event-profile.module#EventProfilePageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
