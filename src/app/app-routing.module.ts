import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WaypointComponent } from './_template/waypoint/waypoint.component';
import { ArticelComponent } from './_template/articel/articel.component';
import { RegisterComponent } from './_template/register/register.component';
import { BasicRouterComponent } from './_components/basicRouter.component';
import { LoginGuard } from './_service/guards/login-guard.service';
import { LoginComponent } from './_template/login/login.component';
import { VerifyEmailComponent } from './_template/verify-email/verify-email.component';
import { AdminComponent } from './_template/admin/admin.component';
import { RoleGuard } from './_service/guards/role-guard.service';
import { GenericPopupComponent } from './_components/generic-popup/generic-popup.component';

const routes: Routes = [
  { path: '', redirectTo: '/start', pathMatch: 'full' },
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
  { path: 'register', component: RegisterComponent },
  { path: 'verify', component: VerifyEmailComponent },
  // prettier-ignore

  { path: 'admin', component: BasicRouterComponent, canActivate: [RoleGuard],
    children: [

      {path: ':id', component: AdminComponent},
      {path: '', pathMatch: 'full', component: AdminComponent}
    ]
  },
  { path: 'test', component: GenericPopupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
