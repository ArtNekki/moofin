import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Output() onClose: EventEmitter<any> = new EventEmitter<any>();

  navItems = [
    {
      name: 'Диалоги',
      id: 'dialogs'
    },
    {
      name: 'Посты',
      id: 'posts'
    },
    {
      name: 'Уведомления',
      id: 'notifications',
    },
    {
      name: 'Услуги',
      id: 'services'
    },
    {
      name: 'Взаимопомощь',
      id: 'help'
    },
    {
      name: 'Личный кабинет',
      id: 'profile'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
