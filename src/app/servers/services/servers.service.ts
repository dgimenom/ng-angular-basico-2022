import { Injectable } from '@angular/core';
import { Server } from '../server.model';

@Injectable({
  providedIn: 'root',
})
export class ServersService {
  constructor() {}

  servers: Server[] = [
    new Server('Production', 1, 'stable', 'medium'),
    new Server('User database', 2, 'stable', 'large'),
    new Server('Stage', 3, 'failed', 'small'),
    new Server('Development', 4, 'initializing', 'small'),
  ];

  logNewServer(server: Server) {
    console.log(server);
  }

  addServer(server: Server) {
    this.servers.push(server);
  }

  changeServerStatus(server: Server) {
    this.servers[server.id - 1].status =
      server.status === 'stable' ? 'failed' : 'stable';
  }
}
