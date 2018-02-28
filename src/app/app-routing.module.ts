import { AuthGuard } from './guards/auth-guard.service';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewpageComponent } from './components/viewpage/viewpage.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ResetComponent } from './components/reset/reset.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: 'welcome', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  {path: 'view/:id', component: ViewpageComponent},
  { path: 'register', component: RegistrationComponent },
  { path: 'reset', component: ResetComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
