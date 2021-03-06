import { Component, OnInit } from '@angular/core';
import {SimpleModalService} from 'ngx-simple-modal';
import {DialogGoodsComponent} from '../dialog-goods/dialog-goods.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private modalService: SimpleModalService) { }

  ngOnInit() {
  }

  showAlert() {
    this.modalService.addModal(DialogGoodsComponent, {
      title: 'Лежанки',
      message: 'информация по лежанкам'
    });
  }
}
