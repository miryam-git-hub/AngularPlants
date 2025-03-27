import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(public r:Router){}
  featuredItems = [
    {
      barkodItem: '12345',
      nameItem: 'קטגורית פרחים',
      image: 'פרח השמש.jpg'
    },
    {
      barkodItem: '67890',
      nameItem: ' קטגורית עצים',
      image: 'קרמבולה.jpeg'
    },
    {
      barkodItem: '11121',
      nameItem: ' צמחי נוי ביתיים',
      image: 'שתיל שולחני.jpg'
    }
  ];

  
  more(){
  this.r.navigate(['our products']);
  
  }
}
