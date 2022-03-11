import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {
  fruits : any;

  constructor() {
    this.fruits = [
      {fruitId:1,  fruitName:'APPLE',        price:50.00,  imagePath:'./assets/Images/apple.png'},
      {fruitId:2,  fruitName:'BANANA',       price:40.00,  imagePath:'./assets/Images/Banana.png'},
      {fruitId:3,  fruitName:'STRAWBERRY',   price:75.00,  imagePath:'./assets/Images/Strawberry.jpg'},
      {fruitId:4,  fruitName:'CHERRIES',     price:50.00,  imagePath:'./assets/Images/cherries.png'},
      {fruitId:5,  fruitName:'PINEAPPLE',    price:58.00,  imagePath:'./assets/Images/pineapple.png'},
      {fruitId:6,  fruitName:'KIWI',         price:90.00,  imagePath:'./assets/Images/kiwi.png'},
      {fruitId:7,  fruitName:'MANGOES',      price:70.00,  imagePath:'./assets/Images/mangoes.png'},
      {fruitId:8,  fruitName:'ORANGE',       price:50.00,  imagePath:'./assets/Images/orange.png'},
      {fruitId:9,  fruitName:'PAPAYA',       price:46.00,  imagePath:'./assets/Images/pappaya.jpg'},
      {fruitId:10, fruitName:'PEAR',         price:55.00,  imagePath:'./assets/Images/Pear.jpg'},
      {fruitId:11, fruitName:'GUAVA',        price:50.00,  imagePath:'./assets/Images/guava.png'},
      {fruitId:12, fruitName:'MUSK MELON',   price:69.00,  imagePath:'./assets/Images/musk melon.png'},
      {fruitId:13, fruitName:'GREEN GRAPES', price:30.00,  imagePath:'./assets/Images/green grapes.png'},
      {fruitId:14, fruitName:'BLACK GRAPES', price:90.00,  imagePath:'./assets/Images/black grapes.png'},
      {fruitId:15, fruitName:'DRAGON FRUIT', price:65.00,  imagePath:'./assets/Images/dragon fruit.png'},
      {fruitId:16, fruitName:'WATER MELON',  price:90.00,  imagePath:'./assets/Images/water melon.png'},


    ];
   }

  ngOnInit(): void {
  }
  addToCart(fruit: any): void {
    console.log(fruit);
  }

}

