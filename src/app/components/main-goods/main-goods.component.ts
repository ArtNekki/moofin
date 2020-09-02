import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import Swiper, {SwiperOptions} from 'swiper';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-main-goods',
  templateUrl: './main-goods.component.html',
  styleUrls: ['./main-goods.component.scss']
})
export class MainGoodsComponent implements OnInit {
  @ViewChild('slider', {read: ElementRef, static: false}) slider: ElementRef;
  @ViewChild('btnLeft', {read: ElementRef, static: false}) btnLeft: ElementRef;
  @ViewChild('btnRight', {read: ElementRef, static: false}) btnRight: ElementRef;
  @Input() data: Observable<[]>;

  items;
  swiper: Swiper;
  itemsLoading: boolean;

  config: SwiperOptions;


  constructor() { }

  ngOnInit() {
    this.data.subscribe((result) => {
      this.items = result;

      setTimeout(() =>  this.initSwiper(), 0);
    });
  }

  initSwiper() {
    console.log('slider', this.btnLeft)

    if (!this.swiper || !this.swiper.initialized) {
      this.swiper = new Swiper(this.slider.nativeElement, {
        slidesPerView: 1,
        spaceBetween: 0,
        breakpointsInverse: true,
        // autoplay: {
        //   delay: 2000,
        //   stopOnLastSlide: false,
        //   disableOnInteraction: true
        // },
        // loop: true,
        breakpoints: {
          ['576']: {
            slidesPerView: 2,
            spaceBetween: 14
          },
          ['820']: {
            slidesPerView: 3,
            spaceBetween: 14
          }
        },
        pagination: {
          el: '#services-pagination',
          clickable: true
        },
        navigation: {
          nextEl: this.btnLeft.nativeElement,
          prevEl: this.btnRight.nativeElement,
        },
      });

      console.log('swiper', this.swiper);
    }
  }

}
