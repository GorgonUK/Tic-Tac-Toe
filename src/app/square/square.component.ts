import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button class="gridbox btn-success"  *ngIf="!value"><h1 class="currentVal">{{ value }}</h1></button>
    <button class="gridbox btn-success"  *ngIf="value == 'X'"><h1 class="xclass">{{ value }}</h1></button>
    <button class="gridbox btn-danger"  *ngIf="value == 'O'"><h1 class="oclass">{{ value }}</h1></button>
  `,
  styleUrls: ['./square.component.sass']
  ,
})
export class SquareComponent {

  @Input() value: 'X' | 'O';

}
