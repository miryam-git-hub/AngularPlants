import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../classes/Item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(public server:HttpClient) {

   }

  //  שמירת התוצאה במשתנה כדי שהמוצרים יוכרו בכל הקומפוננטות
  allItem:Array<Item>=new Array<Item>();

  basicUrl:string="https://localhost:7189/api/Courses/"

// קבלת המוצרים 5 או הכל עפי המשתנה הבוליאני שנשלח
  gatItem(topTen:boolean):Observable<Array<Item>>
  {
    return this.server.get<Array<Item>>(`${this.basicUrl}${topTen}`);
  }


}
