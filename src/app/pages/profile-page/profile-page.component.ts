import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  skills = ['Помощь с сантехникой', 'Помощь с электрикой'];
  editMode = false;
  editPersonalMode = false;

  constructor() { }

  ngOnInit() {
  }

  addSkill() {
    this.skills.push('');
  }
}
