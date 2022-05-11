import { Component } from '@angular/core';
import { Server } from './server.model';

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
export class ServerComponent {
  serverName = '';
  servers: Server[] = [
    new Server('Production', 1, 'stable'),
    new Server('User database', 2, 'stable'),
    new Server('Stage', 3, 'failed'),
    new Server('Development', 4, 'initializing'),
  ];

  users: User[] = [
    {
      name: 'Max',
      id: '1',
      email: 'test@test.com',
      sayHello() {
        console.log('Hello!');
      },
    },
  ];

  todayDate = new Date();

  constructor() {}

  onCreateServer() {
    const server = {
      id: this.servers.length,
      name: this.serverName,
      status: 'stable',
    };
    this.servers.push(server);
  }

  getStatusClass() {
    const classes = {
      stable: 'badge-success',
      failed: 'badge-danger',
      initializing: 'badge-warning',
    };
    return 'badge-success';
  }
}
