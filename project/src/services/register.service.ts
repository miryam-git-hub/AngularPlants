import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../classes/Customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(public http:HttpClient) { }

basicUrl:string="https://localhost:7189/api/ControllersCastemr"
currentUserService:Customer=new Customer();
// הוספת לקוח חדש
addCustomer(c:Customer):Observable<boolean>
{
 return this.http.post<boolean>(this.basicUrl,c)
}
}
