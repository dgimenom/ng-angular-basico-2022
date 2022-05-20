import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShortenPipe } from './pipes/shorten.pipe';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { CreateServerComponent } from './servers/create-server/create-server.component';
import { CreateServerTdComponent } from './servers/create-server-td/create-server-td.component';

@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    ShortenPipe,
    ServerComponent,
    CreateServerComponent,
    CreateServerTdComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
