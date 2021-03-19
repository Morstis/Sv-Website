import { NgModule } from '@angular/core';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { Routes, RouterModule } from '@angular/router';
import { AppBodyComponent } from './c/app-body/app-body.component';
import { SettingsComponent } from './c/settings/settings.component';

const routes: Routes = [
  {
    path: '',
    component: AppBodyComponent,
    children: [
      { path: 'settings', component: SettingsComponent },
      {
        path: 'admin',
        // ...canActivate(() => redirectUnauthorizedTo(['/auth/login'])),
        loadChildren: () =>
          import('../../modules/admin/admin.module').then((m) => m.AdminModule),
      },

      {
        path: 'nachhilfe',
        ...canActivate(() => redirectUnauthorizedTo(['/auth/login'])),
        loadChildren: () =>
          import('../../modules/nachhilfe/nachhilfe.module').then(
            (m) => m.NachhilfeModule
          ),
      },

      {
        path: 'home',
        loadChildren: () =>
          import('../../modules/home/home.module').then((m) => m.HomeModule),
      },
      { path: '', pathMatch: 'full', redirectTo: 'home' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppBodyRoutingModule {}
