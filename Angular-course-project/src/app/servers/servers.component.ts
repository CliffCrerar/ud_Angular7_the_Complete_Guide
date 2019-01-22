import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No Server was created';
  serverName = 'Testserver';
  constructor() {
    setTimeout(() => {
      // console.log('BUTTON ON');
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    // console.log('Add server clicked');
    this.serverCreationStatus =
      'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(ev: any) {
    // console.log('ev: ', ev);
    this.serverName = (<HTMLInputElement>ev.target).value;
  }

  ngOnInit() {}
}
