import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public totalItem : number = 0;
  userDisplayName = '';
  constructor(private route:ActivatedRoute, private router:Router,private service:CartService) { }

  ngOnInit(): void {
    this.service.getFruits()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }
}
