import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { AppBodyModule } from './modules/app-body/app-body.module';
import { WillkommenModule } from './modules/willkommen/willkommen.module';
import { AuthModule } from './modules/auth/auth.module';
import { NachhilfeModule } from './modules/nachhilfe/nachhilfe.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule,
    AppBodyModule,
    WillkommenModule,
    AuthModule,
    NachhilfeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
