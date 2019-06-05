import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './_template/header/header.component';
import { WaypointComponent } from './_template/waypoint/waypoint.component';
import { RouterCheckService } from './_service/router-check.service';
import { ArticelComponent } from './_template/articel/articel.component';
import { UserService } from './_service/user.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WaypointComponent,
    ArticelComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [RouterCheckService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
