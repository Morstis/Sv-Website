import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './_template/header/header.component';
import { WaypointComponent } from './_template/waypoint/waypoint.component';
import { ArticelComponent } from './_template/articel/articel.component';
import { UserService } from './_service/user.service';
import { CookieService } from 'ngx-cookie-service';
import { FooterComponent } from './_template/footer/footer.component';
import { RegisterComponent } from './_template/register/register.component';
import { NgxImageCompressService } from 'ngx-image-compress';
import { BasicRouterComponent } from './_components/basicRouter.component';
import { LoginComponent } from './_template/login/login.component';
import { VerifyEmailComponent } from './_template/verify-email/verify-email.component';
import { SharedModule } from './shared/shared.module';
import { ForgotPasswordComponent } from './_template/forgot-password/forgot-password.component';
import { AdminComponent } from './_template/admin/admin.component';
import { AdminShowUserComponent } from './_components/admin-show-user/admin-show-user.component';
import { EditComponent } from './_template/edit/edit.component';
import { DragAndDropDirective } from './_directive/drag-and-drop.directive';
import { GenericPopupComponent } from './_components/generic-popup/generic-popup.component';
import { ShowAllProjectsComponent } from './_components/show-all-projects/show-all-projects.component';
import { AppRoutingModule } from './app-routing.module';

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
    AdminShowUserComponent,
    EditComponent,
    DragAndDropDirective,
    GenericPopupComponent,
    ShowAllProjectsComponent
  ],
  imports: [BrowserModule, SharedModule, AppRoutingModule],
  providers: [UserService, CookieService, NgxImageCompressService],
  bootstrap: [AppComponent]
})
export class AppModule {}
