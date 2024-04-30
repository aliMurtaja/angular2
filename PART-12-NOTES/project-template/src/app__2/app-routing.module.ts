import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolver } from './servers/server/server-resolver.service';

const appRoutes: Routes = [

  // NOTE THAT here we are configuring the routes, and we configure any route as a object,
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent, children: [
    { path: ':id/:name', component: UserComponent }
  ] },
  {
    path: 'servers',
    // canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: ServersComponent,
    children: [
      {
        path: ':id/edit', component: EditServerComponent,
        // This service will run when we leave the route(navigate)
        canDeactivate: [CanDeactivateGuard] },
        { path: ':id', component: ServerComponent,
        // this will get the `data` be it sync or async
        resolve: {server: ServerResolver}
      },
    ] },
    // { path: 'not-found', component: PageNotFoundComponent },
    { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
    { path: '**', redirectTo: '/not-found' }
  ];

@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes, {useHash: true})
      // useHash --> on server side, we are telling server to ignore any segment after domain if we enter [domain]/[segment] directally on url

    // here we register our route configured above
    RouterModule.forRoot(appRoutes)
  ],

  // as we registered our `RouterModule`, now we are exporting only this module(RouterModule), so that we can import it in app.module.js
  exports: [RouterModule]
})
export class AppRoutingModule {

}
