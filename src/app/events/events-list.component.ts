import { Component, OnInit } from '@angular/core';
// import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { EventService, IEvent } from './shared';
import { AdService } from '../components/ad-banner/ad.service';
import { AdItem } from '../components/ad-banner/ad-container.component';

@Component({
  // selector: 'events-list',
  templateUrl: 'events-list.component.html'
})
export class EventsListComponent implements OnInit {
  // events: any[];
  events: IEvent;
  ads: AdItem[];
  constructor(
    private eventService: EventService,
    // private toastr: ToastrService,
    private route: ActivatedRoute,
    private adService: AdService
  ) {}

  ngOnInit() {
    // this.events = this.eventService.getEvents();
    // this.eventService.getEvents().subscribe(events => this.events = events);
    this.events = this.route.snapshot.data['events'];
    this.ads = this.adService.getAds();
  }

  // not needed
  // handleThumbnailCLick(eventName) {
  //   this.toastr.success(eventName);
  // }
}
