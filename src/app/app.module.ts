import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MOvieComponent } from './movie/movie.component';
import { TaskngifNgforComponent } from './taskngif-ngfor/taskngif-ngfor.component';
import { TasksComponent } from './tasks/tasks.component';
import { PipeTaskComponent } from './pipe-task/pipe-task.component';
import { PipeTaskPipe } from './pipe-task.pipe';
import { EmpDataService } from './emp-data.service';
import { EmpInfoComponent } from './emp-info/emp-info.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductbyHttpClientComponent } from './productby-http-client/productby-http-client.component';
import { EmpRouteComponent } from './emp-route/emp-route.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { AppRoutingModule } from './app-routing.module';
import { TempletdemoComponent } from './templetdemo/templetdemo.component';
import {RectivedemoComponent} from './rectivedemo/rectivedemo.component';
import { StudentformComponent } from './studentform/studentform.component';
import { StudentformreactiveComponent } from './studentformreactive/studentformreactive.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { ChecknetworkComponent } from './checknetwork/checknetwork.component';
import { Machinetest1listComponent } from './machinetest1list/machinetest1list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MachinetestLoginComponent } from './machinetest-login/machinetest-login.component';
import { MachinetestproductdetailComponent } from './machinetestproductdetail/machinetestproductdetail.component';
import { CartComponent } from './cart/cart.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MOvieComponent,
    TaskngifNgforComponent,
    TasksComponent,
    PipeTaskComponent,
    PipeTaskPipe,
    EmpInfoComponent,
    ProductbyHttpClientComponent,
    EmpRouteComponent,
    TempletdemoComponent,
    RectivedemoComponent,
    StudentformComponent,
    StudentformreactiveComponent,
    RegisterComponent,
    UserHomeComponent,
    ChecknetworkComponent,
    Machinetest1listComponent,
    MachinetestLoginComponent,
    MachinetestproductdetailComponent,
    CartComponent,
    
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [EmpDataService],
  bootstrap: [AppComponent, HomeComponent,TasksComponent,PipeTaskPipe,Machinetest1listComponent]
})
export class AppModule { }
