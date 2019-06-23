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
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WaypointComponent,
    ArticelComponent,
    FooterComponent,
    RegisterComponent,
    ShowErrorComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [RouterCheckService, UserService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {}
