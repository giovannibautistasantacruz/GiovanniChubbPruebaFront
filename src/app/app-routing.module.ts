import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './autentication/dashboard/dashboard.component';


const routes: Routes = [

  {path:'dashboard',component:DashboardComponent ,loadChildren:()=>import('./autentication/autentication.module').then(m=>m.autenticationModule)},

   {path:'**',redirectTo:'dashboard/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
