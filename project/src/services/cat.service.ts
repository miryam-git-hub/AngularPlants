import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { category } from '../classes/Category';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor(public http:HttpClient) { }

  // מחזיר את כל הקטגוריות
  getC():Observable<Array<category>>
  {
    return this.http.get<Array<category>>('https://localhost:7189/api/CategoryControllers')

  }
  
}
