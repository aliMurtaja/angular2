import { Component, OnInit } from '@angular/core';
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  accounts: {name: string, status: string}[] = [];

  // To use the service instance, we have to create instance of service
    // --> const serINs = new AccountsService();
                // here we created instance of service, it will work, but but but this is wrong way to use service.
                // here we created instance by our own, which is wrong
                // The right way is::
                    // -->  constructor(private accountsService: AccountsService) {}
                              // when our component instance creates, Angular will create `AccountsService` instance --> `accountsService`
                              // and this is right way to make instance of service




  // In this component we didn't provide `AccountsService` using `providers` property in @Component decorator.
  // If we had done that, we would have had different instance of service
  constructor(private accountsService: AccountsService) {}
  

  ngOnInit() {
    this.accounts = this.accountsService.accounts;
  }
}
