import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WaypointComponent } from './_template/waypoint/waypoint.component';
import { ArticelComponent } from './_template/articel/articel.component';
import { RegisterComponent } from './_template/register/register.component';
import { BasicRouterComponent } from './_components/basicRouter.component';
import { LoginGuard } from './_service/guards/login-guard.service';
import { LoginComponent } from './_template/login/login.component';

const routes: Routes = [
  { path: 'start', component: WaypointComponent, canActivate: [LoginGuard] },
  // prettier-ignore
  {
    path: 'projekte', component: BasicRouterComponent, canActivate: [LoginGuard],
      children: [
        { path: '', component:  WaypointComponent},
        { path: ':projekt', component: ArticelComponent }
      ]
  },
  // prettier-ignore
  {
    path: 'nachhilfe', component: WaypointComponent, canActivate: [LoginGuard]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
