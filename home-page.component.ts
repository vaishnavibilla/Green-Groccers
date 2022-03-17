import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  items : any;
  constructor() {
    this.items=[
      {ItemId:1,  Name:'APPLE',        price:20.00,q:'/piece',  imagePath:'./assets/Images/apple.png', ret:6},
      {ItemId:2,  Name:'CAPSICUM',     price:40.00, q:'/kg',  imagePath:'./assets/Images/capsicum.png', ret:5},
      {ItemId:3,  Name:'BANANA',       price:40.00,q:'/dozen',   imagePath:'./assets/Images/Banana.png', ret:2},
      {ItemId:4,  Name:'CABBAGE',      price:40.00,q:'/kg',   imagePath:'./assets/Images/cabbage.png', ret:7},
      {ItemId:5,  Name:'STRAWBERRY',   price:60.00,q:'/box of 6',   imagePath:'./assets/Images/Strawberry.jpg', ret:5},
      {ItemId:6,  Name:'CARROT',       price:60.00,q:'/kg',   imagePath:'./assets/Images/carrot.png', ret:6},
      {ItemId:7,  Name:'MANGOES',      price:70.00,q:'/kg',  imagePath:'./assets/Images/mangoes.png', ret:3},
      {ItemId:8,  Name:'CORN',         price:14.00,q:'/piece',   imagePath:'./assets/Images/corn.png', ret:3},
    ]

   }

  ngOnInit(): void {
  }
  addToCart(item: any): void {
    console.log(item);
  }

}
