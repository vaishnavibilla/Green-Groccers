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

  ngOnInit() : void{
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
  showDetails(result:any){
    alert(result);
  }
}


