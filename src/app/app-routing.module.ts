import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WaypointComponent } from './_template/waypoint/waypoint.component';
import { ArticelComponent } from './_template/articel/articel.component';
import { RegisterComponent } from './_template/register/register.component';
import { AppComponent } from './app.component';
import { BasicRouterComponent } from './_components/basicRouter.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'start', component: WaypointComponent },
  // prettier-ignore
  {
    path: 'projekte', component: BasicRouterComponent,
      children: [
        { path: '', component:  WaypointComponent},
        { path: ':projekt', component: ArticelComponent }
      ]
  },
  { path: 'nachhilfe', component: WaypointComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
