import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-btn',
  imports: [],
  templateUrl: './btn.component.html',
  styleUrl: './btn.component.css',
  standalone: true
})
export class BtnComponent {

// כפתור דינאמי עם איקון
@Input() myClass:String=""
@Input() word:String=""
@Output() myFunc=new EventEmitter();

func(){
  this.myFunc.emit();
}

}
