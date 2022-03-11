import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  users: any;

  constructor(private router: Router, private service: userService) { 
    this.email = '';
    this.password = '';

  }

  ngOnInit(): void {
  }

  loginSubmit(): void {
    console.log("Email: " + this.email);
    console.log("Password: " + this.password);
  }

  async loginSubmit2(loginForm: any) {
      await this.service.getEmployeeByEmailAndPassword(loginForm).then((result:any)=>{
        console.log(result);
        if(result != null){
          this.router.navigate(["home-page"]);
        }
        else{
          alert("Invalid User");
        }
      }); 
  }
}


// import { Component, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { AuthService } from '../auth.service';
// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
//   constructor(private authService:AuthService){ }

//   ngOnInit(){
//   }

//   onLogin(loginForm : NgForm){
//     console.log(loginForm.value);
//     const user = this.authService.authUser(loginForm.value);
//     if(user){
//       console.log('Login Succesful');
//     }
//     else{
//       console.log('Login unsuccesful');
//     }
//   }
// } 