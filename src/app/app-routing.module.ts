import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WaypointComponent } from './_template/waypoint/waypoint.component';
import { ArticelComponent } from './_template/articel/articel.component';

const routes: Routes = [
  { path: 'start', component: WaypointComponent },
  { path: 'projekte', component: WaypointComponent },
  { path: 'Umwelt-AG', component: ArticelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
