import { Component, OnInit } from '@angular/core';
import {SimpleModalComponent} from 'ngx-simple-modal';

export interface GoodsModel {
  title?: string;
  message: string;
}

@Component({
  selector: 'app-dialog-goods',
  templateUrl: './dialog-goods.component.html',
  styleUrls: ['./dialog-goods.component.scss']
})
export class DialogGoodsComponent extends SimpleModalComponent<GoodsModel, null> implements  GoodsModel, OnInit {

  title: string;
  message: string;

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
