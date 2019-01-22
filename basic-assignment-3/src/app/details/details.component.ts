import { Component, OnInit } from '@angular/core';
import moment from 'moment';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  toggleTextDisplay = false;
  btnClicks = [];
  constructor() {}

  onButtonClick() {
    const timeNow = moment().format('MMMM Do YYYY, h:mm:ss a');
    const clicks = this.btnClicks.length + 1;
    this.btnClicks.push(clicks + ' | ' + timeNow);
    this.toggleTextDisplay = !this.toggleTextDisplay;
  }
  ngOnInit() {}
}
