import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ItemService } from '../../../services/item.service';
import { Item } from '../../../classes/Item';
import { Location } from '@angular/common';

@Component({
  selector: 'app-more-detailes',
  standalone: true,
  imports: [],
  templateUrl: './more-detailes.component.html',
  styleUrl: './more-detailes.component.css'
})
export class MoreDetailesComponent {
constructor(public ar:ActivatedRoute,
            public ItemS:ItemService,
            public back1:Location
){

  // פרטים נוספים - 
  // פונקציה שמקבלת קוד מוצר ומביאה את הנתונים שלו
  ar.params.subscribe(data=>{
    this.BarkodItem=data['idI'];
    let c=ItemS.allItem.find(x=>x.barkodItem==this.BarkodItem)
    if(c){
      console.log(c);
      
      this.currentItem=c
      console.log(this.currentItem);
      
    }
    else
    alert(" not fount item")
  })
  
}

// מחזיר אחורה
goBack(){
this.back1.back();

}


BarkodItem:string=""
currentItem:Item=new Item("10000")

}
