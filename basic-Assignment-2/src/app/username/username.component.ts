import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {
  username = '';
  resetButtonOff = this.username === '' ? true : false;

  constructor() {
    console.log('resetButtonOff: ', this.resetButtonOff);
  }

  resetButtonSwitch() {
    if (this.username === '') {
      this.resetButtonOff = true;
    } else {
      this.resetButtonOff = false;
    }
  }

  clearInput() {
    this.username = '';
    this.resetButtonSwitch();
  }

  ngOnInit() {}
}
