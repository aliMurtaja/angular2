import { Component } from '@angular/core';


// keep in mind it is ts file, so whatever we write here, will compile by tsc.
// and angular is library which expose lot of APIs, and those APIS is in respect of TS.
// For example we know that decoratore is part of TS not js. and angular expose lot of decorator which we can use in ts file.
    //  why ts --> the reason is that simple js is not capabale to execute any decorator, 
    // that's why we are using `@Component` decorator in ts file --> `app.component.ts`
    // and `angular` not only provides decorator, it provides a lot of things(APIs) and those could be in respect of ts or simple js
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  name = 'Max';
}
