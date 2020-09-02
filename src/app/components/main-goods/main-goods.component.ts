import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import Swiper, {SwiperOptions} from 'swiper';
import { of } from 'rxjs';

@Component({
  selector: 'app-main-goods',
  templateUrl: './main-goods.component.html',
  styleUrls: ['./main-goods.component.scss']
})
export class MainGoodsComponent implements OnInit {
  @ViewChild('slider', {read: ElementRef, static: false}) slider: ElementRef;
  // @ViewChild('sliderWrapper', {read: ElementRef, static: false}) sliderWrapper: ElementRef;

   data = of([{title: 'Title 1'}, {title: 'Title 2'}, {title: 'Title 3'}, {title: 'Title 4'}, {title: 'Title 5'}, {title: 'Title 6'}]);

  items;
  swiper: Swiper;
  itemsLoading: boolean;

  config: SwiperOptions = {
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
      nextEl: '#services-btn-right',
      prevEl: '#services-btn-left',
    },
  };


  constructor() { }

  ngOnInit() {
    this.data.subscribe((result) => {
      this.items = result;

      setTimeout(() =>  this.initSwiper(), 0);
    });
  }

  initSwiper() {
    console.log('slider', this.slider)

    if (!this.swiper || !this.swiper.initialized) {
      this.swiper = new Swiper(this.slider.nativeElement, this.config);

      console.log('swiper', this.swiper);
    }
  }

}
