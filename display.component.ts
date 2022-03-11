// import { Component, OnInit } from '@angular/core';
// import { userService } from '../user.service';

// @Component({
//   selector: 'app-display',
//   templateUrl: './display.component.html',
//   styleUrls: ['./display.component.css']
// })
// export class DisplayComponent implements OnInit {

//   user: any;
//   newUser: any;
//   constructor(private service: userService) { 
//     this.newUser = {name: '',phoneno:'', email:'', password:''};
//   }

//   ngOnInit(): void {
//     this.service.fetchDetails().subscribe((result: any)=>{
//       this.user = result;
//     })
//   }

// }


import { Component, OnInit } from '@angular/core';
import { userService } from '../user.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  user : any;
  newUser: any;
  constructor(private service: userService) { 
    this.newUser = {name: '',phoneno: '', email:'', pwd:''};
  }

  ngOnInit(): void {
    this.service.fetchDetails().subscribe((result: any)=>{
      this.user = result;
    })
  }
  deleteEmp(employee: any) {
    this.service.deleteEmp(employee).subscribe((result: any) => {
      console.log(employee.email);
      const i = this.user.findIndex((element: any) => {
        return employee.userName === element.userName;
      })
      this.user.splice(i, 1);
    });
  }
  updateEmp(employee: any){
    this.newUser.name = employee.userName;
    this.newUser.phoneno = employee.phoneno;
    this.newUser.email = employee.email;
    this.newUser.pwd = employee.password;
    this.service.updateEmp(this.newUser).subscribe((result: any) => {
      console.log(this.newUser.email);

      //update in the web page
      this.user.userName = this.newUser.name;
      this.user.email = this.newUser.email;
    });
  }
}