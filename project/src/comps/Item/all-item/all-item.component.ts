import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../../services/item.service';
import { Item } from '../../../classes/Item';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';
import { ShopCartService } from '../../../services/shop-cart.service';
import { ShopCart } from '../../../classes/ShopCart';
import { RegisterService } from '../../../services/register.service';
import { ButtonChangeDirective } from '../../../button-change.directive';
import { FilterService } from '../../../services/filter.service';
import { FormsModule, NgModel } from '@angular/forms';
import { BtnComponent } from '../../btn/btn/btn.component';
import { ShekelPipe } from '../../../pipe/Shekel.pipe';
import { CatService } from '../../../services/cat.service';
import { category } from '../../../classes/Category';

@Component({
  selector: 'app-all-item',
  standalone: true,
  imports: [ButtonChangeDirective,FormsModule, BtnComponent,ShekelPipe,NgClass],
  templateUrl: './all-item.component.html',
  styleUrl: './all-item.component.css'
})


export class AllItemComponent implements OnInit {
constructor(public ItemS: ItemService, 
  public catS:CatService,
  // לצורך הניתוב דרך הקוד יש להזריק משתנה
  public r:Router,
  public cartS:ShopCartService,
  public currentUserS:RegisterService,
  public f:FilterService
){}

  ngOnInit(): void {
    this.allItem1=this.ItemS.allItem
    this.getItem(true)
    this.getCategory()
    
  }



allItem1:Array<Item>=new Array<Item>()
allCat:Array<category>=new Array<category>

// העברה לקומפוננטה של נתונים נוספים על המוצר
more(i:Item){
console.log(i);
this.r.navigate(['more/'+i.barkodItem]);

}


// הוספה לסל
addBasket(c:Item){

  // בדיקה אם המוצר נמצא בסל, אם כן להוסיף 1 
  console.log(c.barkodItem);
  let x = this.cartS.buyItems.findIndex(item=>item.IdItem==c.barkodItem)
  if(x !==-1){
    this.cartS.buyItems[x].CountItem!+=1;
    console.log(this.cartS.buyItems);
    
    
    
  }  
else
{
  // אם לא - להגדיר אובייקט של מוצר בסל חדש ולהכניס
  const newCartItem = new ShopCart();
  newCartItem.CountItem =1;
  newCartItem.IdItem =c.barkodItem;
  newCartItem.IdDbuy=this.generateUniqueCode();
  
  this.cartS.buyItems.push(newCartItem);

  console.log(this.cartS.buyItems);
  
  
}
}

//  זימון של הקריאת שרת של כל המוצרים מהSERVICE 
// יש כאן משתנה בוליאני כיוון שהשתמשנו באותה קריאת שרת 
// גם ל- 5 מוצרים הנבחרים וגם לכל המוצרים,
// ולכן יש משתנה בוליאני שאומר מה לתת - 5 או הכל
getItem(topTen:boolean){
  this.ItemS.gatItem(topTen).subscribe(
    item=>{
      console.log(item);
      this.ItemS.allItem=item;
      this.allItem1=this.ItemS.allItem;
      console.log(this.allItem1);
      
      console.log(this.allItem1[0]);
      
      
    },
    err=>console.log("error"+err.message)
    
  )
}

// מיונים
// מיון לפי מחיר
sort1() {
  this.allItem1 = [...this.ItemS.allItem]; // החזר את המצב המקורי לפני המיון
  this.allItem1.sort((a, b) => Number(a.sizeItem) - Number(b.sizeItem));
  console.log(this.allItem1);
}

// מיון ךפי כמות במלאי
sort2() {
  this.allItem1 = [...this.ItemS.allItem]; // החזר את המצב המקורי לפני המיון
  this.allItem1.sort((a, b) => Number(b.countOfMelai) - Number(a.countOfMelai));
  console.log(this.allItem1);
}

// חזרה, ללא מיון
sort3()
{
  console.log("3");
  
  this.allItem1=this.ItemS.allItem;
  console.log(this.allItem1);
  
}

// משתנים שיקלטו את הערכים עי NGMODEL שלפיהם נרצה לסנן
cat: string | undefined;
pri: number | undefined; 
mel: number | undefined; 

// זימון קריאת השרת מהSERVICE
filter1(category?: string, price?: number, stock?: number) {
  // יש כאן בדיקות האם הכניסו ערכיםכיוון שאפשר להכניס כמה ואפשר גם רק אחד
  console.log("filter");
  if(stock)
    console.log(stock);
  if (category) {
    this.cat = category;
  }
  
  if (price !== undefined) { // בודק אם price הוגדר
    this.pri = price; // אם price הוא מספר, אין צורך להמיר
  }
  
  if (stock !== undefined) { // בודק אם stock הוגדר
    this.mel = stock; // אם stock הוא מספר, אין צורך להמיר
  }
  
  this.f.filter1(this.cat, this.pri, this.mel).subscribe(
    d => {
      if (d) {
        this.allItem1 = d; // עדכון רשימת הפריטים
        console.log(this.allItem1);
      }
    },
    err => console.log(err.message)
  );
}

// קשור לC# כיוון שאין לנו ID אוטומטי
generateUniqueCode(): string {
  // דוגמה ליצירת קוד רנדומלי באורך 8 תווים שמכיל רק מספרים
  return Math.floor(10000000 + Math.random() * 90000000).toString();
}

// זימון קריאת השרת של הקטגוריות מה SERVICE
getCategory(){
  this.catS.getC().subscribe(

  d => {
    if (d) {
      this.allCat = d; // עדכון רשימת הפריטים
      console.log(this.allCat);
    }
  },
  err => console.log(err.message)
);
}


}


