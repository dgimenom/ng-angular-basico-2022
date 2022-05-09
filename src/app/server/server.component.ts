import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  serverId: number = 10;
  serverStatus: string = 'offline';
  allowNewServer: boolean = false;

  serverCreationStatus: string = 'No server was created!';
  serverName: string = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  getServerStatus(): string {
    return this.serverStatus;
  }

  onCreateServer(): void {
    this.serverCreationStatus = 'Server was created!';
  }

  onApply() {
    this.serverName = 'myname';
  }

  onUpdateServerName(event: Event) {
    const name = (event.target as HTMLInputElement).value;
    this.serverName = name;
  }
}
