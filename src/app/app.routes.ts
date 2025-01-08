import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { GreetingComponent } from './greeting/greeting.component';
import { QueryFragmentComponent } from './query-fragment/query-fragment.component';
import { LoginComponent } from './login/login.component';
import { PersonalComponent } from './personal/personal.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'dashboard', component: DashboardComponent, children: [
    { path: 'profile', component: ProfileComponent },
    { path: 'settings', component: SettingsComponent },
  ] },
  { path: 'greeting/:name', component: GreetingComponent },
  { path: 'query-fragment', component: QueryFragmentComponent },
  { path: 'login', component: LoginComponent },
  { path: 'personal', component: PersonalComponent, canActivate: [AuthGuard] },
];
