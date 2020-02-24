import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean;
  allowNewDirective: boolean;
  serverCreationStatus = 'no server was created';
  serverName = 'test';
  directiveName = '';
  directiveCreated = false;
  ngForServers = ['ngForTestServer 1', 'ngForTestServer 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = !this.allowNewServer;
    }, 2000);

    setTimeout(() => {
      this.allowNewDirective = !this.allowNewDirective;
    }, 2000);
  }

  onUpdateServerName(event: Event) {
    this.serverName = (event.target as HTMLInputElement).value;
  }

  onCreateServer() {
    this.serverCreationStatus = 'server was created! Name is ' + this.serverName;
  }

  onCreateDirective() {
    this.directiveCreated = true;
  }

  onCreateNgForDirective() {
    this.ngForServers.push(this.directiveName);
  }

  ngOnInit(): void {
  }

}
