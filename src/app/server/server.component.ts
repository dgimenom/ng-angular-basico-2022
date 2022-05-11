import { Component, OnInit } from '@angular/core';

export interface User {
  name: string;
  id: number | string;
  email?: string;
  sayHello(): void;
}

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

  serverNames: string[] = ['Server 1', 'Server 2', 'Server 3', 'Server 4'];

  servers: any[] = [
    {
      instanceType: 'medium',
      name: 'Production',
      status: 'stable',
      started: new Date(15, 1, 2017),
      maintenanceCost: 49.9,
    },
    {
      instanceType: 'large',
      name: 'User database',
      status: 'stable',
      started: new Date(15, 1, 2017),
      maintenanceCost: 25.85,
    },
    {
      instanceType: 'small',
      name: 'Stage',
      status: 'failed',
      started: new Date(15, 1, 2017),
      maintenanceCost: 10.0,
    },
    {
      instanceType: 'small',
      name: 'Development',
      status: 'initializing',
      started: new Date(15, 1, 2017),
      maintenanceCost: 10.0,
    },
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

  getStatusClass(serverStatus: any): string {
    switch (serverStatus) {
      case 'stable':
        return 'server-stable';
      case 'failed':
        return 'server-failed';
      case 'initializing':
        return 'server-initializing';
      default:
        return 'server-unknown';
    }
  }
}
