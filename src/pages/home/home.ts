import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  animations: [
    trigger('colorChange', [
      state('black', style({ background: 'black' })),
      transition('* => black', animate('3000ms')),
      state('red', style({ background: 'red' })),
      transition('* => red', animate('3000ms')),
      state('green', style({ background: 'green' })),
      transition('* => green', animate('3000ms')),
      state('blue', style({ background: 'blue' })),
      transition('* => blue', animate('3000ms')),
      state('yellow', style({ background: 'yellow' })),
      transition('* => yellow', animate('3000ms')),
      state('orange', style({ background: 'orange' })),
      transition('* => orange', animate('3000ms')),
      state('aqua', style({ background: 'aqua' })),
      transition('* => aqua', animate('3000ms')),
      state('white', style({ background: 'white' })),
      transition('* => white', animate('3000ms')),
      state('pink', style({ background: 'pink' })),
      transition('* => pink', animate('3000ms'))
    ])
  ],
})
export class HomePage {

    private colorCount: number = 0;
    private currentColor: string;
    colorArr: string[] = ['red', 'green', 'blue', 'yellow', 'orange', 'aqua', 'pink', 'white'];

    constructor(public navCtrl: NavController) {

    }

    changeColor() {
        this.colorCount++;
        if (this.colorCount < this.colorArr.length) {
            this.currentColor = this.colorArr[this.colorCount];
        } else {
            this.colorCount = 0;
            this.currentColor = this.colorArr[0];
        }
    }

}
