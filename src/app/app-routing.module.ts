import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DisplayComponent } from './display/display.component';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [ 
  {path:'',component:HomePageComponent},
  {path:'login',component:LoginComponent},
  {path:'register',canActivate:[AuthGuard],component:RegisterComponent},

  {path:'home-page',
  children:[
    {path:'',component:HomePageComponent},
    {path:'register', canActivate:[AuthGuard],component:RegisterComponent},
    {path:'display',canActivate:[AuthGuard],component:DisplayComponent}
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
