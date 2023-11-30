import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MOvieComponent } from './movie/movie.component';

import { EmpInfoComponent } from './emp-info/emp-info.component';
import { ProductbyHttpClientComponent } from './productby-http-client/productby-http-client.component';
import { EmpRouteComponent } from './emp-route/emp-route.component';
import { TasksComponent } from './tasks/tasks.component';
import { TempletdemoComponent } from './templetdemo/templetdemo.component';
import { RectivedemoComponent } from './rectivedemo/rectivedemo.component';
import { StudentformComponent } from './studentform/studentform.component';
import { StudentformreactiveComponent } from './studentformreactive/studentformreactive.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { Machinetest1listComponent } from './machinetest1list/machinetest1list.component';
import { MachinetestLoginComponent } from './machinetest-login/machinetest-login.component';
import { MachinetestproductdetailComponent } from './machinetestproductdetail/machinetestproductdetail.component';

const routes: Routes = [
    {path:'Home', component:HomeComponent},
  {path:'movie', component:MOvieComponent},
  {path: 'task', component:TasksComponent},
  {path:'product', component:ProductbyHttpClientComponent},
  {path:'Employee', component:EmpInfoComponent},
  {path:'', redirectTo:'/LoginComponent', pathMatch:'full'},
  {path : 'EmpData/:id' , component:EmpRouteComponent},
  {path:'Tempdemo', component:TempletdemoComponent},
  {path:'RectiveDemo', component:RectivedemoComponent},
  {path: 'Studentform', component:StudentformComponent},
  {path:'StudentReactive', component:StudentformreactiveComponent},
  {path:'LoginComponent' , component:LoginComponent},
  {path:'RegisterComponent', component:RegisterComponent },
  {path:'UserHomeComponent' , component:UserHomeComponent},
  {path :'Machinetest1list', component:Machinetest1listComponent},
  {path : 'MachineLogin', component:MachinetestLoginComponent},
  {path : 'productdetail/:id', component:MachinetestproductdetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 
 }
