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
import { ShowErrorComponent } from './_components/show-error.component';
import { EmailValidationDirective } from './_directive/validation/email-validation.directive';
import { KlasseValidationDirective } from './_directive/validation/klasse-validation.directive';
import { HttpClientModule } from '@angular/common/http';
import { XssDirective } from './_directive/validation/xss.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WaypointComponent,
    ArticelComponent,
    FooterComponent,
    RegisterComponent,
    ShowErrorComponent,
    EmailValidationDirective,
    KlasseValidationDirective,
    XssDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [RouterCheckService, UserService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {}
