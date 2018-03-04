import { AjaxService } from './services/ajax.service';
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
import { NavbarComponent } from './components/navbar/navbar.component';
import { TrainerService } from './services/trainer.service';
import { DetailsUploadComponent} from './components/details-upload/details-upload.component';
import { ListUploadComponent} from './components/list-upload/list-upload.component';
import { UploadFileService} from './services/upload-file.service';
import { PostService } from './services/post.service';
import { PostComponent } from './components/post/post.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ViewpageComponent } from './components/viewpage/viewpage.component';
import { FeedPageComponent } from './components/feed-page/feed-page.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ResetComponent } from './components/reset/reset.component';
import { FeedPostsComponent } from './components/feed-posts/feed-posts.component';
import { ForgotService } from './services/forgot.service';
import { ProfileService } from './services/profile.service';
import { CreateTokenComponent } from './components/create-token/create-token.component';
import { EnterTokenComponent } from './components/enter-token/enter-token.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { PostdetailComponent } from './components/postdetail/postdetail.component';
import { FeedPostDetailComponent } from './components/feed-post-detail/feed-post-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    ViewpageComponent,
    ListUploadComponent,
    DetailsUploadComponent,
    PostComponent,
    FeedPageComponent,
    RegistrationComponent,
    ResetComponent,
    FeedPostsComponent,
    CreateTokenComponent,
    ChangePasswordComponent,
    EnterTokenComponent,
    PostdetailComponent,
    FeedPostDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    TrainerService,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    UploadFileService,
    PostService,
    AuthGuard,
    ForgotService,
    ProfileService,
    AjaxService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
