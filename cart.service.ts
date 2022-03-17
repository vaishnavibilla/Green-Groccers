import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : any =[]
  public fruitList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");

  constructor() { }
  getFruits(){
    return this.fruitList.asObservable();
  }

  setFruit(fruit : any){
    this.cartItemList.push(...fruit);
    this.fruitList.next(fruit);
  }
  addtoCart(fruit : any){
    this.cartItemList.push(fruit);
    this.fruitList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList)
  }
  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.price;
    })
    return grandTotal;
  }
  removeCartItem(fruit: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(fruit.id=== a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.fruitList.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList = []
    this.fruitList.next(this.cartItemList);
  }
  
}
