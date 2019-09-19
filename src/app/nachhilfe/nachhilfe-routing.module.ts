import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NachhilfeGebenComponent } from './_templates/nachhilfe-geben/nachhilfe-geben.component';
import { NachhifeWaypointComponent } from './nachhife-waypoint/nachhife-waypoint.component';
import { NachhilfeNehmenComponent } from './_templates/nachhilfe-nehmen/nachhilfe-nehmen.component';
import { NachhifeInfoComponent } from './_templates/nachhife-info/nachhife-info.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'geben', component: NachhilfeGebenComponent },
      { path: 'nehen', component: NachhilfeNehmenComponent },
      { path: 'info', component: NachhifeInfoComponent },
      { path: '', component: NachhifeWaypointComponent, pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NachhilfeRoutingModule {}
