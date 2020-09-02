import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-goods-card',
  templateUrl: './goods-card.component.html',
  styleUrls: ['./goods-card.component.scss']
})
export class GoodsCardComponent implements OnInit {
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
