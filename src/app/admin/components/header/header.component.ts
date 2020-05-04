import { Component, OnInit } from '@angular/core';
import {AdminAuthService} from '../../core/services/admin-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public auth: AdminAuthService) { }

  ngOnInit() {
  }

}
