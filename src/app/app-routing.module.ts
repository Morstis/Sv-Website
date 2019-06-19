import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WaypointComponent } from './_template/waypoint/waypoint.component';
import { ArticelComponent } from './_template/articel/articel.component';
import { RegisterComponent } from './_template/register/register.component';

const routes: Routes = [{ path: 'register', component: RegisterComponent }];

const waypointpathes: string[] = ['start', 'projekte'];
const articelpathes: string[] = ['Umwelt-AG', 'Pausen-Ausleihe'];

waypointpathes.forEach(element => {
  routes.push({ path: element, component: WaypointComponent });
});

articelpathes.forEach(element => {
  routes.push({ path: element, component: ArticelComponent });
});

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
