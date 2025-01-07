import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { GreetingComponent } from './greeting/greeting.component';
import { QueryFragmentComponent } from './query-fragment/query-fragment.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'dashboard', component: DashboardComponent, children: [
    { path: 'profile', component: ProfileComponent },
    { path: 'settings', component: SettingsComponent },
  ] },
  { path: 'greeting/:name', component: GreetingComponent },
  { path: 'query-fragment', component: QueryFragmentComponent }
];
