import { Component, OnInit } from '@angular/core';
import { userService } from '../user.service';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  user: any;
  newUser: any;
  constructor(private service: userService) { 
    this.newUser = {name: '',phoneno:'', email:'', password:''};
  }

  ngOnInit(): void {
    this.service.fetchDetails().subscribe((result: any)=>{
      this.user = result;
    })
  }

}