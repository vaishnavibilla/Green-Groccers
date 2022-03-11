import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
//import { DisplayComponent } from './display/display.component';
import { HomePageComponent } from './home-page/home-page.component';
import { GreenComponent } from './green/green.component';
import { AboutComponent } from './about/about.component';
import { FruitsComponent } from './fruits/fruits.component';
import { VegetablesComponent } from './vegetables/vegetables.component';


const routes: Routes = [ 
  //{path:'',component:HomePageComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  //{path:'display',component:DisplayComponent},
  {path:'green', component:GreenComponent},
  {path:'about', component:AboutComponent},
  {path:'fruits',component:FruitsComponent},
  {path:'vegetables',component:VegetablesComponent},

  {path:'home-page',
  children:[
    {path:'',component:HomePageComponent},
    {path:'register', canActivate:[AuthGuard],component:RegisterComponent},
    //{path:'display',canActivate:[AuthGuard],component:DisplayComponent}
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
