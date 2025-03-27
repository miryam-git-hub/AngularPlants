import { Component } from '@angular/core';
import { ShopCartService } from '../../../services/shop-cart.service';
import { ItemService } from '../../../services/item.service';
import { Router } from '@angular/router';
import { BtnComponent } from '../../btn/btn/btn.component'; 
import { DisPipe, NamePipe, PricePipe } from '../../../pipe/data-item.pipe';

@Component({
  selector: 'app-shop-cart',
  standalone: true,
  imports: [BtnComponent,PricePipe,DisPipe,NamePipe],
  templateUrl: './shop-cart.component.html',
  styleUrl: './shop-cart.component.css',
  
})
export class ShopCartComponent {

constructor(public CartS:ShopCartService,public ItemS:ItemService
  ,public r:Router
){}

// פונקציה המקבלת את הפריט הנוכחי ובודקת ברשימת הפרטים את הנתונים הבאים:
// שם, מחיר ותיאור
// בסוף השתמשנו ב PIPE
getPriceAndName(i: string): { name: string, price: string ,dis:string} {
  
  let x = this.ItemS.allItem.find(item=>item.barkodItem==i)!;
  return {
    name: `${x.nameItem}`,
    price: `${x.sizeItem}`,
    dis: `${x.discraptionItem}`
  };
}

// עדכון + ו - 
update(c:string, num:number)
{
let x = this.CartS.buyItems.find(item=>item.IdItem==c)!;
if(num==1)
   x.CountItem!++;
  else{
    if(num==0)
     if(x.CountItem!>1)
      x.CountItem!--;
    
    else 
       { 
         let y = this.CartS.buyItems.findIndex(item=>item.IdItem==c)!;
         this.CartS.buyItems.splice(y,1);
         }  }
}

// מחיקת הפריט אם לוחצים על X
deleteItem(c:string)
{
  let y = this.CartS.buyItems.findIndex(item=>item.IdItem==c)!;
  this.CartS.buyItems.splice(y,1);
}


// מעבר לתשלום
pay()
{
  this.r.navigate(['pay'])
}

// מעבר להזהות
logIn()
{
    this.r.navigate(['logIn'])
}

}

