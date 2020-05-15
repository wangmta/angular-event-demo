import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { EventService } from './event.service';

@Injectable()
export class EventRouteActivator implements CanActivate {
  constructor(private rounter: Router, private eventService: EventService) { }

  canActivate(route: ActivatedRouteSnapshot) {
    const eventExists = !!this.eventService.getEvent(+route.params['id']);
    if (!eventExists) {
      this.rounter.navigate(['/404']);
    }
    return eventExists;
  }
}
