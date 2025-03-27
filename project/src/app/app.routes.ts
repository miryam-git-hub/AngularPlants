import { Routes } from '@angular/router';
import { HomeComponent } from '../comps/home/home.component';
import { AllItemComponent } from '../comps/Item/all-item/all-item.component'; 
import { MoreDetailesComponent } from '../comps/moreDetailes/more-detailes/more-detailes.component'; 
import { RegisterComponent } from '../comps/register/register/register.component'; 
import { ShopCartComponent } from '../comps/shopCart/shop-cart/shop-cart.component';
import { LogInComponent } from '../comps/logIn/log-in/log-in.component';
import { PayComponent } from '../comps/pay/pay.component'; 
export const routes: Routes = [

{path:"Home",component:HomeComponent},
{path:"our products",component:AllItemComponent,

},
{path:'logIn',component:LogInComponent},
{path:'pay',component:PayComponent},

{path:'shopingCart',component:ShopCartComponent},
{path:"more/:idI",component:MoreDetailesComponent},
{path:"RegisterForm",component:RegisterComponent},
{path:"",component:HomeComponent},
{path:"**",component:HomeComponent}

];
