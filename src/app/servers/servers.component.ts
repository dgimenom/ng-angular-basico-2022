import { Component, ViewChild } from '@angular/core';
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

  constructor() {
    setTimeout(() => {
      console.log(this.pRef);
      this.pRef.nativeElement.innerHTML = 'Hello World';
      this.pRef.nativeElement.setAttribute('style', 'color:red');
    }, 3000);
  }

  @ViewChild('pRef', { static: false }) pRef: any;

  onCreateServerOld() {
    const server = {
      id: this.servers.length + 1,
      name: this.serverName,
      status: 'stable',
      instanceType: 'medium',
    };
    this.servers.push(server);
  }

  onCreateServer(serverNameInput: HTMLInputElement) {
    console.log(serverNameInput);
    const server = new Server(
      serverNameInput.value,
      this.servers.length,
      'stable',
      'medium'
    );
    this.servers.push(server);
  }

  changeServerStatus(server: Server) {
    this.servers[server.id - 1].status =
      server.status === 'stable' ? 'failed' : 'stable';
  }
}
