import { Component, OnInit } from '@angular/core';
import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';

const animationDuration = 300;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('nav', [
      state('hidden', style({ transform: 'translateX(-100%)'})),
      state('visible', style({ transform: 'translateX(0)'})),
      transition('hidden <=> *', animate(200)),
    ])
  ]
})
export class HeaderComponent implements OnInit {

  NavState = {
    HIDDEN: 'hidden',
    VISIBLE: 'visible'
  }

  navCurrentState = this.NavState.HIDDEN;

  constructor() { }

  ngOnInit() {
  }

  setNavState(value: string) {
    this.navCurrentState = value;
  }
}
