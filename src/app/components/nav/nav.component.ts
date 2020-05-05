import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserAuthService} from '../../core/services/user-auth.service';
import {Router, RouterModule} from '@angular/router';

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
      name: 'Общие вопросы',
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
    }
  ]

  constructor(
    public auth: UserAuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  logout(event: Event) {
    event.preventDefault();
    this.auth.logout();
    this.onClose.emit();

    this.router.navigate(['/', 'login']);
  }
}
