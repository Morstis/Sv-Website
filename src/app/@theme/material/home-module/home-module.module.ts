import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeModuleRoutingModule } from './home-module-routing.module';
import { HomeModuleComponent } from './home-module.component';
import { HomeComponent } from './sites/home/home.component';

@NgModule({
  declarations: [HomeModuleComponent, HomeComponent],
  imports: [CommonModule, HomeModuleRoutingModule],
})
export class HomeModuleModule {}
