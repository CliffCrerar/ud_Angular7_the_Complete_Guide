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
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];
  constructor() {
    setTimeout(() => {
      // console.log('BUTTON ON');
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    // console.log('Add server clicked');
    this.servers.push(this.serverName);
    this.serverCreated = true;
    this.serverCreationStatus =
      'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(ev: any) {
    // console.log('ev: ', ev);
    this.serverName = (<HTMLInputElement>ev.target).value;
  }

  ngOnInit() {}
}
