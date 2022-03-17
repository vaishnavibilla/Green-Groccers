import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { userService } from '../user.service';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  users: any;
  userName : any

  constructor(private router: Router,private service: userService) { 
    this.users = {name: '', phone:' ',email: '', password:''};
  }

  ngOnInit(): void {
    console.log("User Registered Successfully!!");
  }

  registrationSubmit(): void {
    console.log(this.users);
  }
  
  registrationSubmit2(loginForm: any): void {
    console.log(loginForm);
  }
  registerEmp() {
    this.service.registerEmp(this.users).subscribe();
    this.router.navigate(['login']);
  }
}
