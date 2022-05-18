import { Component } from '@angular/core';
import { Server } from './server.model';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {
  serverName = '';
  servers: Server[] = [
    new Server('Production', 1, 'stable', 'medium'),
    new Server('User database', 2, 'stable', 'large'),
    new Server('Stage', 3, 'failed', 'small'),
    new Server('Development', 4, 'initializing', 'small'),
  ];

  onCreateServer(serverNameInput: HTMLInputElement) {
    const server = new Server(
      serverNameInput.value,
      this.servers.length,
      'stable',
      'medium'
    );
    this.servers.push(server);
    this.serverName = '';
  }

  changeServerStatus(server: Server) {
    this.servers[server.id - 1].status =
      server.status === 'stable' ? 'failed' : 'stable';
  }
}
