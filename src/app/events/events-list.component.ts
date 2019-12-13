import { Component, OnInit } from '@angular/core';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { EventService, IEvent } from './shared';

@Component({
  // selector: 'events-list',
  templateUrl: 'events-list.component.html'
})
export class EventsListComponent implements OnInit {
  // events: any[];
  events: IEvent;
  constructor(private eventService: EventService, private toastr: ToastrService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    // this.events = this.eventService.getEvents();
    // this.eventService.getEvents().subscribe(events => this.events = events);
    this.events = this.route.snapshot.data['events'];
  }

  handleThumbnailCLick(eventName) {
    this.toastr.success(eventName);
  }

}
