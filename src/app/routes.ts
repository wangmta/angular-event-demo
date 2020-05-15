import { Routes } from '@angular/router';
import { Error404Component } from '../components/errors/404.component';
import {
  EventsListComponent,
  EventRouteActivator,
  EventListResolver,
  EventResolver
} from '../pages/events-list';

export const appRoutes: Routes = [
  // angular can't differentitate /new & /:id, but put /news above will let it search this component first
  {
    path: 'events/new',
    loadChildren: '../pages/create-event/create-event.module#CreateEventModule'
  },
  // {
  //   path: 'events/new',
  //   component: CreateEventComponent,
  //   canDeactivate: ['canDeactivateCreateEvent']
  // },
  // render the DOM after event service is resolved
  { path: 'events', component: EventsListComponent, resolve: { events: EventListResolver } },
  {
    path: 'events/:id',
    loadChildren: '../pages/event-detail/event-detail.module#EventDetailModule',
    resolve: { event: EventResolver }
  },
  // { path: 'events/:id', component: EventDetailsComponent, resolve: { event: EventResolver } },
  // { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
  {
    path: 'events/session/new',
    loadChildren: '../pages/create-session/create-session.module#CreateSessionModule'
  },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: 'user', loadChildren: '../components/user/user.module#UserModule' }
];

