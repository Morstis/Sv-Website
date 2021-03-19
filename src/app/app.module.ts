import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { ORIGIN } from '@angular/fire/functions';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { emulators } from './FireEmulators';
import { SharedModule } from './modules/shared/shared.module';
import { WillkommenModule } from './modules/willkommen/willkommen.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    SharedModule,
    BrowserAnimationsModule,
    WillkommenModule,
    AppRoutingModule,
  ],
  providers: [AngularFireAuthGuard, ...emulators()],
  bootstrap: [AppComponent],
})
export class AppModule {}
