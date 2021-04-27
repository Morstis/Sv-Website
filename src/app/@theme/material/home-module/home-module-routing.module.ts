import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModuleComponent } from './home-module.component';
import { HomeComponent } from './sites/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeModuleComponent,
    children: [{ path: '', pathMatch: 'full', component: HomeComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeModuleRoutingModule {}
