import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WaypointComponent } from './_template/waypoint/waypoint.component';
import { ArticelComponent } from './_template/articel/articel.component';
import { RegisterComponent } from './_template/register/register.component';

// TODO: just do it with path: "waypoints/:waypint"
const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'start', component: WaypointComponent },
  { path: 'projekte', component: WaypointComponent },
  { path: 'nachhilfe', component: WaypointComponent },
  { path: 'Umwelt-AG', component: ArticelComponent },
  { path: 'Pausen-Ausleihe', component: ArticelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
