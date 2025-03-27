import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ShopCartService } from './shop-cart.service';
import { Observable } from 'rxjs';
import { Buy } from '../classes/Buy';
import { BuyList } from '../classes/BuyList';
import { RegisterService } from './register.service';

@Injectable({
  providedIn: 'root'
})
export class PayService {

  constructor(public http:HttpClient,public cartS:ShopCartService, public customerCurrent:RegisterService) { }

basicUrl:string="https://localhost:7189/api/BuyControllers"


// יצירת קניה ופרטי קניה
buy(b:BuyList):Observable<number>{
  console.log("b: ",b);
  let r= this.http.post<number>(this.basicUrl,b);
  return r;
}

id:number|undefined
//  הנחת יום הולדת
discount():Observable<number>{


return  this.http.get<number>(`https://localhost:7189/api/BirthdayDiscountControllers/${this.id}?yuserbirthday=${this.customerCurrent.currentUserService.dateOfBirthday}`)

}
  


}
