import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../classes/Customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(public http:HttpClient) { }
  basicUrl:string = 'https://localhost:7189/api/ControllersCastemr'

  // מחזיר את כל הלקוחות
  getAllCustomer():Observable<Array<Customer>>
  {
    return this.http.get<Array<Customer>>(`${this.basicUrl}`)
  }
}
