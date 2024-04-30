import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { SecondAppComponent } from './secondApp.component';

@NgModule({

  // here we register our component
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    SecondAppComponent
  ],

  // as we can split our component into multiple component.
  // we could also split our module into multiple module.
  // since till now we doesn't have our any custome module.
  // but angular also splite their own module, that't we are using those. 
  imports: [
    BrowserModule,  // -> to simple run our app in browser
    FormsModule,    // -> to use Form related APIs 
  ],
  providers: [],

  // here we boot our root app
  // since we kw that we only use only one selector in index.html.
  // so we will pass only one component to be boot in index.html
  bootstrap: [
      AppComponent, 
      // ServerComponent,  //-> this wont work
  ]
})
export class AppModule { }
