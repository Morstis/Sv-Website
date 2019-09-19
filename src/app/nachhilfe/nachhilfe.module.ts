import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NachhilfeRoutingModule } from './nachhilfe-routing.module';
import { NachhilfeGebenComponent } from './_templates/nachhilfe-geben/nachhilfe-geben.component';
import { NachhilfeNehmenComponent } from './_templates/nachhilfe-nehmen/nachhilfe-nehmen.component';
import { NachhifeWaypointComponent } from './nachhife-waypoint/nachhife-waypoint.component';
import { NachhifeInfoComponent } from './_templates/nachhife-info/nachhife-info.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    NachhilfeGebenComponent,
    NachhilfeNehmenComponent,
    NachhifeWaypointComponent,
    NachhifeInfoComponent
  ],
  imports: [CommonModule, NachhilfeRoutingModule, SharedModule]
})
export class NachhilfeModule {}
