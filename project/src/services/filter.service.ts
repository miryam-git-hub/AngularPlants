import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '../classes/Item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor(public http:HttpClient) { }

  // מחזיר מוצרים על פי סינון
  filter1(category?: string, price?: number, stock?: number): Observable<Array<Item>> {
    return this.http.get<Array<Item>>(`https://localhost:7189/api/SelcetControllers?Category=${category || ''}&price=${price !== null && price !== undefined ? price : ''}&bmale=${stock !== undefined ? stock : 0}`);
}




}
