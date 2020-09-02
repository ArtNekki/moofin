import { Component, OnInit } from '@angular/core';
import {of} from 'rxjs';

@Component({
  selector: 'app-beds-section',
  templateUrl: './beds-section.component.html',
  styleUrls: ['./beds-section.component.scss']
})
export class BedsSectionComponent implements OnInit {
  items =  of([{title: 'Title 1', text: 'asdasadkaskhksjhfkddsf'}, {title: 'Title 1', text: 'asdasadkaskhksjhfkddsf'}, {title: 'Title 1', text: 'asdasadkaskhksjhfkddsf'}, {title: 'Title 1', text: 'asdasadkaskhksjhfkddsf'}, {title: 'Title 1', text: 'asdasadkaskhksjhfkddsf'}, {title: 'Title 1', text: 'asdasadkaskhksjhfkddsf'}]);

  constructor() { }

  ngOnInit() {
  }

}
