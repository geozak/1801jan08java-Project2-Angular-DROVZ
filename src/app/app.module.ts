import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './guards/auth-guard.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { AuthService } from './services/auth.service';
 
import {DetailsUploadComponent} from './components/details-upload/details-upload.component';
import {FormUploadComponent} from './components/form-upload/form-upload.component';
import {ListUploadComponent} from './components/list-upload/list-upload.component';
import {UploadFileService} from './services/upload-file.service';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    HomeComponent,
    ListUploadComponent,
    DetailsUploadComponent,
    FormUploadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    UploadFileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
