import { Injectable } from '@angular/core';
import { ShopCart } from '../classes/ShopCart';

@Injectable({
  providedIn: 'root'
})
export class ShopCartService {

  constructor() { }

// עגלת קניות

buyItems:Array<ShopCart>=new Array<ShopCart>();

// משתנה כדי לדעת איזה כפתור לשים סיום הסל קניות האם כפתור של הרשמה או של תשלום
buttonPay:boolean=false
}
