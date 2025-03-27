import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { ShopCart } from './classes/ShopCart';
import { ShopCartService } from './services/shop-cart.service';
import { ItemService } from './services/item.service';

@Directive({
  selector: '[appButtonChange]',
  standalone: true
})
export class ButtonChangeDirective {

  constructor(public er:ElementRef, public cartS:ShopCartService) {
     
   }
   @Input() pruductId:string|undefined
    
  //  directive - משנה את צבע הכפתור בזמן לחיצה על הוספת מוצר לסל
   @HostListener('click', ['$event'])
   onClick(event: MouseEvent) {
           event.preventDefault(); // מונע את הלחיצה
           this.er.nativeElement.style.opacity='30%'; // משנה את הצבע
       }
  
}
