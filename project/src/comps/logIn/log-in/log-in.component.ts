import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../services/customer.service';
import { Customer } from '../../../classes/Customer';
import { FormsModule, NgModel } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { RegisterService } from '../../../services/register.service';
import { ShopCartService } from '../../../services/shop-cart.service';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent implements OnInit {
  constructor(public CustomerS:CustomerService, public r:Router, public customerCustomer:RegisterService, public cartS:ShopCartService){}
  allCustomer:Array<Customer>=new Array<Customer>();

  ngOnInit(): void {
    this.getAllCustomer1()
  }

  getAllCustomer1(){
    this.CustomerS.getAllCustomer().subscribe(
      d=>{
        console.log(d);
        // console.log(d[0]);
        this.allCustomer=d    
      },
      err=>console.log(err.message)
      
    )
  }


c:Customer=new Customer();
save(){


 let x= this.allCustomer.find(p=>p.idCustomer==this.c.idCustomer);
 
//  אם הלקוח לא נמצא הוא יעביר אותו לדף הרשמה
  if(!x)
      this.r.navigate(['/RegisterForm']);
   else{
    // אם הוא רשום - יחזיר אותו לסל הקניות ושם תהיה לו אפשרות להגיע לסיום תשלום
   this.customerCustomer.currentUserService=x
    this.cartS.buttonPay=true
   this.r.navigate(['/shopingCart']);
   }

       

}         
}
