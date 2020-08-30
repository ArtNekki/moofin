import { Component, OnInit } from '@angular/core';
import {SimpleModalService} from 'ngx-simple-modal';
import {DialogGoodsComponent} from '../../components/dialog-goods/dialog-goods.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

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
