import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ISession } from '../../models/event.model';

@Component({
  templateUrl: './event-detail.component.html',
  styles: [
    `
      .container {
        padding-left: 20px;
        padding-right: 20px;
      }
      .event-image {
        height: 100px;
      }
      a {
        cursor: pointer;
      }
    `
  ]
})
export class EventDetailsComponent implements OnInit {
  event: any;
  addMode: boolean;
  filterBy: string = 'all';
  sortBy: string = 'votes';

  constructor(private eventService: EventService, private route: ActivatedRoute) { }

  // ngOnInit() {
  //   // + cast to positive number
  //   // this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
  //   // the above is problematic when nav to the same page with diff ids
  //   this.route.params.forEach((params: Params) => {
  //     this.event = this.eventService.getEvent(+params['id']);
  //     // reset state
  //     this.addMode = false;
  //   });
  // }

  ngOnInit() {
    this.route.data.forEach(data => {
      this.event = data['event'];
      this.addMode = false;
    });
  }

  addSession() {
    this.addMode = true;
  }

  saveNewSession(session: ISession) {
    const nextId = Math.max.apply(
      null,
      this.event.sessions.map(s => s.id)
    );
    session.id = nextId + 1;
    this.event.sessions.push(session);
    // this.eventService.updateEvent(this.event);
    // update the event on the server
    this.eventService.saveEvent(this.event).subscribe();
    this.addMode = false;
  }

  cancelAddSession() {
    this.addMode = false;
  }
}
