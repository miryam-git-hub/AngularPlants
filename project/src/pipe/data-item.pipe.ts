import { Pipe, PipeTransform } from '@angular/core';
import { ItemService } from '../services/item.service';

@Pipe({
  name: 'NamePipe',
  standalone: true
})


// כיוון שבסל הקניות אין על כל מוצר שם, מחיר וכו אלא רק ברקוד,
// לכן שלחתי לPIPE ערך - ברקוד 
// , חיפשתי בכל המוצרים את המוצר שרציתי
// וממנו לקחתי את הערך שרציתי

// PIPE  של שם
export class NamePipe implements PipeTransform {
constructor(public ItemS:ItemService){}
  transform(value:string): unknown {
    let x = this.ItemS.allItem.find(item => item.barkodItem==value)!;
    
      
        return  `${x.nameItem}`

      
    
  }

}

@Pipe({
  name: 'DisPipe',
  standalone: true
})

// PIPE  של תיאור
export class DisPipe implements PipeTransform {
  constructor(public ItemS:ItemService){}
    transform(value:string): unknown {
      let x = this.ItemS.allItem.find(item => item.barkodItem==value)!;
      
        
          return `${x.discraptionItem}`
  
        
      
      
    }
  
  }

  @Pipe({
    name: 'PricePipe',
    standalone: true
  })

  // PIPE  של מחיר
  export class PricePipe implements PipeTransform {
    constructor(public ItemS:ItemService){}
      transform(value:string): unknown {
        let x = this.ItemS.allItem.find(item => item.barkodItem==value)!;
        
          return x.sizeItem!   
          
        
        
      }
    
    }