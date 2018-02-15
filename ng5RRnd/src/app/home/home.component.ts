import { Component, OnInit } from '@angular/core';
import {trigger, style, transition, animate, keyframes, query, stagger} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('goals', [
      transition('* => *', [
        query(':enter', style({opacity: 0}), {optional: true}),
        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translate(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translate(35px)', offset: 0.3}),
            style({opacity: 1, transform: 'translate(0)', offset: 1})
          ]))
        ])),
        query(':leave', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: 0.3}),
            style({opacity: 0, transform: 'translateY(-75%)', offset: 1})
          ]))
        ]))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  itemCount: number;
  btnText = 'Add an item';
  goalText = 'My first life goal';
  goals = ['item1', 'item2', 'item3'];
  constructor() { }

  ngOnInit() {
    this.itemCount = this.goals.length;
  }

  addItem() {
    this.goals.push(this.goalText);
    this.goalText = '';
    this.itemCount = this.goals.length;
  }

  removeItem() {
    this.goals.splice(i, 1);
  }

}
