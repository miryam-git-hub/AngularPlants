import { Buy } from "./Buy";
import { ShopCart } from "./ShopCart";

// CLASS לצורך שליחה לקריאת שרת של עדכון הקניה
export class BuyList {
    constructor(public buy?:Buy,public DetailesOfBuyList?:ShopCart[]){}
}