import { Component } from '@angular/core';
import { animate, state, style, transition, trigger, keyframes } from '@angular/animations';
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
    ]),
      /*
      trigger('sizeChange', [
          state('small', style({
              transform: 'scale(1)',
          })),
          state('large', style({
              transform: 'scale(1.2)',
          })),
          transition('small <=> large', animate('300ms ease-in', keyframes([
              style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
              style({opacity: 1, transform: 'translateY(35px)',  offset: 0.5}),
              style({opacity: 1, transform: 'translateY(0)',     offset: 1.0})
          ]))),
      ]),
      */
      trigger('resize', [
          state('small', style({
              transform: 'scale(1)',
          })),
          state('large', style({
              transform: 'scale(1.3)',
          })),
          transition('small <=> large', animate('300ms ease-in-out')),
      ]),
      trigger('shake', [
          state('start', style ({
              perspective: '1000px'
          })),
          state('end', style ({
              perspective: '1000px'
          })),
          transition('start <=> end', animate('5s cubic-bezier(.36,.07,.19,.97)', keyframes([
              style({transform: 'translate3d(-1px, 0, 0)', offset: 0.1}),
              style({transform: 'translate3d(2px, 0, 0)', offset: 0.2}),
              style({transform: 'translate3d(-4px, 0, 0)', offset: 0.3}),
              style({transform: 'translate3d(4px, 0, 0)', offset: 0.4}),
              style({transform: 'translate3d(-4px, 0, 0)', offset: 0.5}),
              style({transform: 'translate3d(4px, 0, 0)', offset: 0.6}),
              style({transform: 'translate3d(-4px, 0, 0)', offset: 0.7}),
              style({transform: 'translate3d(2px, 0, 0)', offset: 0.8}),
              style({transform: 'translate3d(-1px, 0, 0)', offset: 0.9}),
          ])))
      ]),
      /*
      trigger('scale', [
          transition('* <=> *', animate('1s ease-in-out', keyframes([
              style({ transform: 'scale(0.5)' }),
              style({ transform: 'scale(1)' })
          ])))
      ])
      */
  ],
})
export class HomePage {

    private colorCount: number = 0;
    private currentColor: string;
    colorArr: string[] = ['red', 'green', 'blue', 'yellow', 'orange', 'aqua', 'pink', 'white'];

    //private currentSize: string = 'small';

    private shake: string = 'start';

    private resize: string = 'small';

    //private scale: string = 'scale';

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

    /*
    changeSize() {
        this.currentSize = (this.currentSize === 'small' ? 'large' : 'small');
    }
    */

    resizeButton() {
        this.resize = (this.resize === 'small' ? 'large' : 'small');
    }

    shakeIcon() {
        console.log("shakeIcon");
        this.shake = (this.shake === 'start' ? 'end' : 'start');
    }

}
