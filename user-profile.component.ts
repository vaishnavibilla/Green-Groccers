import { Component,Input,Output, OnInit } from '@angular/core';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  @Input() c_name:any;
  @Input() c_phone:any;
  @Input() c_email:any;

  constructor() { }

  ngOnInit(): void {
  }
  @Output() send:EventEmitter<any>=new EventEmitter();
  sendData(){
    this.send.emit(this.c_name+"....."+this.c_phone+"....."+this.c_email+".....");
  }

}
