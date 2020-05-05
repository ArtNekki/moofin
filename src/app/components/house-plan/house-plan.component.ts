import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import { createPopper } from '@popperjs/core';

@Component({
  selector: 'app-house-plan',
  templateUrl: './house-plan.component.html',
  styleUrls: ['./house-plan.component.scss']
})
export class HousePlanComponent implements OnInit {
  @ViewChild('tooltip', {read: ElementRef, static: true}) tooltip: ElementRef;
  flatOpen = false;

  constructor() { }

  ngOnInit() {
  }


  onMouseMove($event: MouseEvent) {
    // const target: HTMLElement = $event.target;
    //
    // if (target.closest('.house-plan__flat')) {
    //   console.log('yes');
    // } else {
    //   console.log('no');
    // }
  }

  toggleInfo(elem) {
    this.flatOpen = true;

    createPopper(elem, this.tooltip.nativeElement, {
      placement: 'left',

    });
  }
}
