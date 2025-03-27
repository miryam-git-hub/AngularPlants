import { Pipe, PipeTransform } from '@angular/core';
import { ItemService } from '../services/item.service';

@Pipe({
  name: 'Shekel',
  standalone: true
})
export class ShekelPipe implements PipeTransform {

  // PIPE שמחזיר לכל את המחיר שקיבל עם סימן של שקל
  constructor(public ItemS:ItemService){}
  transform(value:number) {
    
    return value+"₪"
  }

}
