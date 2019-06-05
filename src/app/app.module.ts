import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './_template/header/header.component';
import { WaypointComponent } from './_template/waypoint/waypoint.component';
import { RouterCheckService } from './_service/router-check.service';

@NgModule({
  declarations: [AppComponent, HeaderComponent, WaypointComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [RouterCheckService],
  bootstrap: [AppComponent]
})
export class AppModule {}
