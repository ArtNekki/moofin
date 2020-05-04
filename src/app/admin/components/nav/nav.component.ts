import { Component, OnInit } from '@angular/core';
import {AdminAuthService} from '../../core/services/admin-auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(public auth: AdminAuthService, private router: Router) { }

  ngOnInit() {
  }

  logout(event: Event) {
    event.preventDefault();
    this.auth.logout();

    this.router.navigate(['/admin', 'login']);
  }
}
