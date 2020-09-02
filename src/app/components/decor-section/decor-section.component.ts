import { Component, OnInit } from '@angular/core';
import {of} from 'rxjs';

@Component({
  selector: 'app-decor-section',
  templateUrl: './decor-section.component.html',
  styleUrls: ['./decor-section.component.scss']
})
export class DecorSectionComponent implements OnInit {
  items =  of([{title: 'Title 2', text: 'asdasadkaskhksjhfkddsf'}, {title: 'Title 2', text: 'asdasadkaskhksjhfkddsf'}, {title: 'Title 2', text: 'asdasadkaskhksjhfkddsf'}, {title: 'Title 2', text: 'asdasadkaskhksjhfkddsf'}, {title: 'Title 2', text: 'asdasadkaskhksjhfkddsf'}, {title: 'Title 2', text: 'asdasadkaskhksjhfkddsf'}]);

  constructor() { }

  ngOnInit() {
  }

}
