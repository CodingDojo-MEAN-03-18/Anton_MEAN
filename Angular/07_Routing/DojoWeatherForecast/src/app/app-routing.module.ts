import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteouteletComponent  } from './routeoutelet/routeoutelet.component';

const routes: Routes = [
  { path: ':id', component: RouteouteletComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
