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
  serverCreated = false;

  servers: any[] = [
    { name: 'server1', status: 'online' },
    { name: 'server2', status: 'offline' },
  ];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
      this.serverStatus = 'online';
    }, 3000);
  }

  ngOnInit(): void {}

  getServerStatus(): string {
    return this.serverStatus;
  }

  onCreateServer(): void {
    this.serverCreationStatus = 'Server was created!';
    this.serverCreated = true;
  }

  onApply() {
    this.serverName = 'myname';
  }

  onUpdateServerName(event: Event) {
    const name = (event.target as HTMLInputElement).value;
    this.serverName = name;
  }

  getColor(): string {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

  isServerOnline(): boolean {
    return this.serverStatus === 'online';
  }
}
