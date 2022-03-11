import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vegetables',
  templateUrl: './vegetables.component.html',
  styleUrls: ['./vegetables.component.css']
})
export class VegetablesComponent implements OnInit {
  vegetables : any;

  constructor() {
    this.vegetables = [
      {vegetableId:1, vegetableName:'BEETROOT',           price:45.00,  imagePath:'./assets/Images/beetroot.png'},
      {vegetableId:2, vegetableName:'BRINJAL',            price:40.00,  imagePath:'./assets/Images/brinjal.png'},
      {vegetableId:3, vegetableName:'BROCOLI',            price:60.00,  imagePath:'./assets/Images/brocoli.png'},
      {vegetableId:4, vegetableName:'CABBAGE',            price:55.00,  imagePath:'./assets/Images/cabbage.png'},
      {vegetableId:5, vegetableName:'CAPSICUM',           price:50.00,  imagePath:'./assets/Images/capsicum.png'},
      {vegetableId:6, vegetableName:'CARROT',             price:80.00,  imagePath:'./assets/Images/carrot.png'},
      {vegetableId:7, vegetableName:'CORIANDER',         price:15.00,  imagePath:'./assets/Images/coriander.png'},
      {vegetableId:8, vegetableName:'CORN',              price:70.00,  imagePath:'./assets/Images/corn.png'},
      {vegetableId:9, vegetableName:'CUCUMBER',          price:30.00,  imagePath:'./assets/Images/cucumber.png'},
      {vegetableId:10, vegetableName:'CURRY LEAF',        price:15.00,  imagePath:'./assets/Images/curry leaf.png'},
      {vegetableId:11, vegetableName:'RIDGE GOURD',       price:60.00,  imagePath:'./assets/Images/ridge gourd.png'},
      {vegetableId:12, vegetableName:'SPINACH',           price:44.00,  imagePath:'./assets/Images/spinach.png'},
      {vegetableId:13, vegetableName:'GREEN CHILLIES',    price:20.00,  imagePath:'./assets/Images/green chillies.png'},
      {vegetableId:14, vegetableName:'YELLOW BELL PEPPER',price:70.00,  imagePath:'./assets/Images/yellow bell pepper.png'},
      {vegetableId:15, vegetableName:'CAULI FLOWER',        price:20.00,  imagePath:'./assets/Images/cauliflower.png'},
      {vegetableId:16, vegetableName:'LADIES FINGER',     price:50.00,  imagePath:'./assets/Images/ladies finger.png'},
      {vegetableId:17, vegetableName:'RED CHILLIES',      price:29.00,  imagePath:'./assets/Images/red chillies.png'},
      {vegetableId:18, vegetableName:'TOMATO',            price:39.00,  imagePath:'./assets/Images/tomato.png'},
      {vegetableId:19, vegetableName:'BITTER GOURD',       price:50.00,  imagePath:'./assets/Images/bitter gourd.png'},
      {vegetableId:20, vegetableName:'BOTTLE GOURD',       price:40.00,  imagePath:'./assets/Images/bottle gourd.png'},



    ];
   }

  ngOnInit(): void {
  }
  addToCart(v: any): void {
    console.log(v);
  }

}

