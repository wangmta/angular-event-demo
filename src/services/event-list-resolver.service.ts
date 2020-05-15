import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { EventService } from './event.service';

@Injectable()
export class EventListResolver implements Resolve<any> {
  constructor(private eventService: EventService) { }

  // resolve() {
  // //this is mapping the result to itself, so it doen't need subscribe()
  //   return this.eventService.getEvents().pipe(map(events => events));
  // }

  // a resolver auto subscribe to an observable call it gets
  // if no subscribe, then no http call is executed
  // http observable call is not executed untill someone subscribe to it
  resolve() {
    // in this case, it doesn't need subscribe()
    return this.eventService.getEvents();
  }
}
