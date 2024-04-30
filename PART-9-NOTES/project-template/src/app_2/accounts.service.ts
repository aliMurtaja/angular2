import { EventEmitter, Injectable } from '@angular/core';

import { LoggingService } from './logging.service';


// To make service injectable, it have to be decorated with `@Injectable()`
// NOTE THAT only receiving service will be decorated not a service which is being injected
// NOTE THAT to inject service into another service, we have to provide(register) in app.module.ts

// If you provide service, then its all children component will use same service untill/unless you use same service in child component.
// If you use same service in child component, it will be totally different instance of that component only and its child component. ( Or override the parent service)
@Injectable()
export class AccountsService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];
  statusUpdated = new EventEmitter<string>();

  constructor(private loggingService: LoggingService) {}

  addAccount(name: string, status: string) {
    this.accounts.push({name: name, status: status});
    this.loggingService.logStatusChange(status);
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
    this.loggingService.logStatusChange(status);
  }
}
