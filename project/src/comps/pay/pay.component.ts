import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PayService } from '../../services/pay.service'; 
import { Buy } from '../../classes/Buy'; 
import { RegisterService } from '../../services/register.service'; 
import { ShopCartService } from '../../services/shop-cart.service'; 
import { BuyList } from '../../classes/BuyList'; 
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-pay',
  imports: [FormsModule],
  templateUrl: './pay.component.html',
  styleUrl: './pay.component.css',
  standalone: true
})

export class PayComponent implements OnInit {
  constructor(public pay: PayService, public c: RegisterService, public cartS: ShopCartService,public allItem:ItemService ) { }
  ngOnInit(): void {
   this. Puy()
  }

  //  הגדרת משתנים לצורך שליחה בשרת אובייקט מסוג גיסון B1
  code: string | undefined  
  b: Buy = new Buy()
  b1: BuyList = new BuyList()
  Puy() {
    console.log("c: ",this.c.currentUserService);
    
    this.b.Customer = this.c.currentUserService.nameCustomer;
    this.b.IdBuing = this.generateUniqueCode();
    
    this.b.Eara = "נפגש שוב בפעם הבאה"
     this.b.DateBuing =  new Date(2023, 0, 1).toISOString().split('T')[0];  
    this.b.Sum=this.sumBusket()
    this.b1 = {
      buy: this.b,
      DetailesOfBuyList: this.cartS.buyItems // שינוי השם לשם המצופה
  };
  

    console.log("b1: ",this.b1);
    // זימון קריאת השרת מה SERVICE שמעדכן קניה ופרטי קניה
    this.pay.buy(this.b1).subscribe(
      d => {
        console.log(d);
        this.pay.id=d

      },
      err => console.log(err.message)

    )
  }

  // קשור ל C# כיוון שאין ID אוטומטי
  generateUniqueCode(): string {
    // דוגמה ליצירת קוד רנדומלי באורך 8 תווים שמכיל רק מספרים
    return Math.floor(10000000 + Math.random() * 90000000).toString();
}

priceOfDiscount:number|undefined
// זימון קריאת השרת מה SERVICE האם יש הנחת יוםהולדת
dicount1()
{
this.pay.discount().subscribe(
d=>{
  console.log(d);
this.priceOfDiscount=d
  
},
err=>{
  console.log(err.message);
  
}


)
}

// משתנים מקומיים שיקלטו את נתוני האשראי שנכנסו
paymentSuccess = false;
processing:boolean = false; 
tz:string|undefined
numCard:number|undefined
expDate:Date|undefined
cvv:number|undefined
cardHolder:string|undefined
Price:number|undefined

// בדיקת סכום הקניה
sumBusket()
{
 let sum=0;
    this.cartS.buyItems.forEach(item => {
        let y = this.allItem.allItem.find(x=>x.barkodItem==item.IdItem)
        if(y?.sizeItem)
        sum+=y.sizeItem*item.CountItem!
}
    )
    console.log(sum);
    this.Price=sum
    return sum
}



onSubmit() {
  
  this.processing = true; // כשמגישים את הטופס, מתחילים את האנימציה
  setTimeout(() => {
    this.processing = false; 
    this.paymentSuccess = true; 
  }, 3000); 
}
}