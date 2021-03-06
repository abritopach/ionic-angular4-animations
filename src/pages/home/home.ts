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
      trigger('flicker', [
          state('start', style ({
              //transform: 'scale(1)',
          })),
          state('end', style ({
              //transform: 'scale(1.1)',
          })),
          transition('start <=> end', animate('2s ease-in', keyframes([
              style({opacity: 1, offset: 0.1}),
              style({opacity: 0, offset: 0.5}),
              style({opacity: 1, offset: 1.0}),
          ])))
      ]),
      trigger('flyInOut', [
          state('in', style({transform: 'translateX(0)'})),
          transition('void => *', [
              style({transform: 'translateX(-100%)'}),
              animate(300)
          ]),
          transition('* => void', [
              animate(300, style({transform: 'translateX(100%)'}))
          ])
      ]),
      trigger('shrinkOut', [
          state('in', style({height: '*'})),
          transition('* => void', [
              style({height: '*'}),
              animate(250, style({height: 0}))
          ])
      ])
  ],
})
export class HomePage {

    private colorCount: number = 0;
    private currentColor: string;
    colorArr: string[] = ['red', 'green', 'blue', 'yellow', 'orange', 'aqua', 'pink', 'white'];

    private flicker: string = 'start';

    private shake: string = 'start';

    private resize: string = 'small';

    private heroes: any;
    private heroes1: any;
    private currentIndex: number = 0;

    static ALL_HEROES = [
    'Windstorm',
    'RubberMan',
    'Bombasto',
    'Magneta',
    'Dynama',
    'Narco',
    'Celeritas',
    'Dr IQ',
    'Magma',
    'Tornado',
    'Mr. Nice'
    ];

    constructor(public navCtrl: NavController) {
        this.heroes = [];
        this.heroes1 = [];

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

    resizeButton() {
        this.resize = (this.resize === 'small' ? 'large' : 'small');
    }

    shakeIcon() {
        this.shake = (this.shake === 'start' ? 'end' : 'start');
    }

    flickerIcon() {
        this.flicker = (this.flicker === 'start' ? 'end' : 'start');
    }

    addHeroe() {
        if (this.currentIndex <= HomePage.ALL_HEROES.length - 1) {
            this.heroes.push(HomePage.ALL_HEROES[this.currentIndex]);
            this.currentIndex += 1;
        }
        else this.currentIndex = 0;
    }

    removeHeroe() {
        if (this.heroes.length > 0) {
            this.heroes.splice(this.heroes.length - 1, 1);
        }
    }

    addHeroe1() {
        if (this.currentIndex <= HomePage.ALL_HEROES.length - 1) {
            this.heroes1.push(HomePage.ALL_HEROES[this.currentIndex]);
            this.currentIndex += 1;
        }
        else this.currentIndex = 0;
    }

    removeHeroe1() {
        if (this.heroes1.length > 0) {
            this.heroes1.splice(this.heroes1.length - 1, 1);
        }
    }

}
