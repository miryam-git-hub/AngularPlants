import { Component } from '@angular/core';
import { Customer } from '../../../classes/Customer'; 
import { FormsModule } from '@angular/forms';
import { RegisterService } from '../../../services/register.service'; 
import { Router } from '@angular/router';
import { ShopCartService } from '../../../services/shop-cart.service'; 

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(public registerS:RegisterService,public r:Router, public cartS:ShopCartService){}
  // זימון קריאת השרת מהSERVICE לצורך הוספת לקוח חדש
  save(){
    console.log(this.currentUser);
    this.registerS.addCustomer(this.currentUser).subscribe(
      x=>{
        if(x)
          console.log("welcome");
          this.registerS.currentUserService=this.currentUser
          console.log(this.registerS.currentUserService);
          this.cartS.buttonPay=true

          this.r.navigate(['shopingCart'])
      },
      err=>console.log("not add")
      
    )
  }

currentUser:Customer=new Customer()
}
