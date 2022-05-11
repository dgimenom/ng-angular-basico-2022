import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Server } from '../server.model';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent {
  @Input() server?: Server;
  @Output() serverChanged = new EventEmitter<Server>();

  onChangeStatus() {
    this.serverChanged.emit(this.server);
  }

  getStatusClass() {
    const classes = {
      stable: 'badge-success',
      failed: 'badge-danger',
      initializing: 'badge-warning',
    };
    return 'server-stable';
  }
}
