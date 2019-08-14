import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './_template/header/header.component';
import { WaypointComponent } from './_template/waypoint/waypoint.component';
import { RouterCheckService } from './_service/router-check.service';
import { ArticelComponent } from './_template/articel/articel.component';
import { UserService } from './_service/user.service';
import { CookieService } from 'ngx-cookie-service';
import { FooterComponent } from './_template/footer/footer.component';
import { RegisterComponent } from './_template/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxImageCompressService } from 'ngx-image-compress';
import { BasicRouterComponent } from './_components/basicRouter.component';
import { LoginComponent } from './_template/login/login.component';
import { VerifyEmailComponent } from './_template/verify-email/verify-email.component';
import { SharedModule } from './shared/shared.module';
import { ForgotPasswordComponent } from './_template/forgot-password/forgot-password.component';
import { AdminComponent } from './_template/admin/admin.component';
import { AdminShowUserComponent } from './_template/admin/admin-show-user/admin-show-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WaypointComponent,
    ArticelComponent,
    FooterComponent,
    RegisterComponent,
    BasicRouterComponent,
    LoginComponent,
    VerifyEmailComponent,
    ForgotPasswordComponent,
    AdminComponent,
    AdminShowUserComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    RouterCheckService,
    UserService,
    CookieService,
    NgxImageCompressService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
