import { EnterTokenComponent } from './components/enter-token/enter-token.component';
import { FeedPageComponent } from './components/feed-page/feed-page.component';
import { AuthGuard } from './guards/auth-guard.service';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewpageComponent } from './components/viewpage/viewpage.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ResetComponent } from './components/reset/reset.component';
import { CreateTokenComponent } from './components/create-token/create-token.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  // { path: 'welcome', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  {path: 'view/:url', component: ViewpageComponent, canActivate: [AuthGuard]},
  { path: 'feed-page', component: FeedPageComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegistrationComponent },
  { path: 'reset', component: ResetComponent },
  { path: 'create-token', component: CreateTokenComponent },
  { path: 'enter-token', component: EnterTokenComponent },
  { path: 'update-password', component: ChangePasswordComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
