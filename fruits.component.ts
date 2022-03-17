import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {
  fruits : any;
  item_qty : any;
  fruit : any;
  itemExists : any;
  public totalItem : number=0;

  constructor(private router:Router,private service:CartService) {
    this.fruits = [
      {fruitId:1,  fruitName:'VEGETABLES COMBO',  price:333.00, q:'/3Kg', imagePath:'./assets/Images/veg_combo.jpg', ret:6},
      {fruitId:2,  fruitName:'FRUITS COMBO',      price:450.00, q:'/3kg', imagePath:'./assets/Images/Fru_combo.png', ret:6},
      {fruitId:3,  fruitName:'VEGETABLE+FRUITS',  price:200.00, q:'/1kg', imagePath:'./assets/Images/FruVeg2.jpg', ret:6},
      {fruitId:4,  fruitName:'VEGETABLE+FRUITS',  price:100.00, q:'/500g', imagePath:'./assets/Images/vegFru1.jpg.crdownload', ret:6},
      {fruitId:5,  fruitName:'APPLE',        price:20.00, q:'/piece', imagePath:'./assets/Images/apple.png', ret:6},
      {fruitId:6, fruitName:'BEETROOT',      price:40.00, q:'/kg',  imagePath:'./assets/Images/beetroot.png', ret:5},
      {fruitId:7,  fruitName:'BANANA',       price:40.00, q:'/dozen', imagePath:'./assets/Images/Banana.png', ret:2},
      {fruitId:8, fruitName:'BRINJAL',       price:35.00, q:'/kg',imagePath:'./assets/Images/brinjal.png', ret:6},
      {fruitId:9,  fruitName:'STRAWBERRY',   price:60.00, q:'/box of 6', imagePath:'./assets/Images/Strawberry.jpg', ret:5},
      {fruitId:10, fruitName:'BROCCOLI',       price:30.00, q:'/kg' , imagePath:'./assets/Images/brocoli.png', ret:4},
      {fruitId:11,  fruitName:'CHERRIES',     price:50.00, q:'/box', imagePath:'./assets/Images/cherries.png', ret:4},
      {fruitId:12, fruitName:'CABBAGE',       price:40.00, q:'/kg', imagePath:'./assets/Images/cabbage.png', ret:7},
      {fruitId:13,  fruitName:'PINEAPPLE',    price:45.00, q:'/piece', imagePath:'./assets/Images/pineapple.png', ret:6},
      {fruitId:14, fruitName:'CAPSICUM',     price:40.00, q:'/kg', imagePath:'./assets/Images/capsicum.png', ret:5},
      {fruitId:15,  fruitName:'KIWI',        price:100.00,q:'/box', imagePath:'./assets/Images/kiwi.png', ret:4},
      {fruitId:16, fruitName:'CARROT',       price:60.00, q:'/kg', imagePath:'./assets/Images/carrot.png', ret:6},
      {fruitId:17,  fruitName:'MANGOES',     price:70.00, q:'/kg', imagePath:'./assets/Images/mangoes.png', ret:3},
      {fruitId:18, fruitName:'CORIANDER',    price:10.00, q:'/100g', imagePath:'./assets/Images/coriander.png', ret:1},
      {fruitId:19,  fruitName:'ORANGE',      price:70.00, q:'/kg',imagePath:'./assets/Images/orange.png', ret:5},
      {fruitId:20, fruitName:'CORN',         price:14.00, q:'/piece', imagePath:'./assets/Images/corn.png', ret:3},
      {fruitId:21,  fruitName:'PAPAYA',      price:24.00, q:'/piece',imagePath:'./assets/Images/pappaya.jpg', ret:2},
      {fruitId:22, fruitName:'CUCUMBER',     price:25.00, q:'/kg', imagePath:'./assets/Images/cucumber.png', ret:5},
      {fruitId:23, fruitName:'PEAR',         price:50.00, q:'/kg', imagePath:'./assets/Images/Pear.jpg', ret:4},
      {fruitId:24, fruitName:'CURRY LEAVES', price:18.00, q:'/100g', imagePath:'./assets/Images/curry leaf.png', ret:1},
      {fruitId:25, fruitName:'GUAVA',        price:25.00, q:'/piece', imagePath:'./assets/Images/guava.png', ret:5},
      {fruitId:26, fruitName:'RIDGE GOURD',  price:50.00, q:'/kg', imagePath:'./assets/Images/ridge gourd.png', ret:6},
      {fruitId:27, fruitName:'MUSK MELON',   price:32.00, q:'/kg', imagePath:'./assets/Images/musk melon.png', ret:2},
      {fruitId:28, fruitName:'SPINACH',      price:18.00, q:'/500g', imagePath:'./assets/Images/spinach.png', ret:2},
      {fruitId:29, fruitName:'TOMATO',       price:20.00, q:'/kg', imagePath:'./assets/Images/tomato.png', ret:2},
      {fruitId:30, fruitName:'GREEN GRAPES', price:38.00, q:'/500g', imagePath:'./assets/Images/green grapes.png', ret:3},
      {fruitId:31, fruitName:'GREEN CHILLIES',price:10.00, q:'/100g',imagePath:'./assets/Images/green chillies.png', ret:4},
      {fruitId:32, fruitName:'BLACK GRAPES', price:71.00, q:'/500g',  imagePath:'./assets/Images/black grapes.png', ret:3},
      {fruitId:33, fruitName:'YELLOW BELL PEPPER',price:35.00,q:'/piece',  imagePath:'./assets/Images/yellow bell pepper.png', ret:5},
      {fruitId:34, fruitName:'RED CHILLIES', price:40.00, q:'/kg',imagePath:'./assets/Images/red chillies.png', ret:10},
      {fruitId:35, fruitName:'DRAGON FRUIT', price:99.00, q:'/piece', imagePath:'./assets/Images/dragon fruit.png', ret:5},
      {fruitId:36, fruitName:'CAULI FLOWER', price:17.00, q:'/piece', imagePath:'./assets/Images/cauliflower.png', ret:6},
      {fruitId:37, fruitName:'WATER MELON',  price:35.00, q:'/piece', imagePath:'./assets/Images/water melon.png', ret:9},
      {fruitId:38, fruitName:'LADIES FINGER',price:14.00, q:'/500g', imagePath:'./assets/Images/ladies finger.png', ret:3},
      {fruitId:39, fruitName:'BITTER GOURD', price:45.00, q:'/500g', imagePath:'./assets/Images/bitter gourd.png', ret:3},
      {fruitId:40, fruitName:'BOTTLE GOURD', price:20.00, q:'/piece', imagePath:'./assets/Images/bottle gourd.png', ret:4},


    ];
   }

  ngOnInit(): void {
    this.service.getFruits()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }
  addToCart(fruit: any){
    this.service.addtoCart(fruit);
  }
  btnAddToCart(fruit: any) {
    this.service.addtoCart(fruit);
      if (fruit.fruitName) {
        this.itemExists = fruit.fruitName;
      }
    }
}

