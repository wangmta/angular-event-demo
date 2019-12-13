import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../events'

@Component({
  templateUrl: './create-event.component.html',
  styles: [
    `
    em {float: right; color: #E05c65; padding-left: 10px;}
    .error{background-color: #e3c3c5;}
    .error::-webkit-input-placeholder {color: #999;}
    .error::-moz-placeholder {color: #999;}
    .error:-moz-input-placeholder {color: #999;}
    .error:-ms-input-placeholder {color: #999;}
    `
  ]
})
export class CreateEventComponent {
  isDirty: boolean = true;
  newEvent;
  constructor(private router: Router, private eventService: EventService) {
  }

  cancel() {
    this.router.navigate(['events']);
  }

  saveEvent(formValues) {
    console.log(formValues);
    this.eventService.saveEvent(formValues);
    this.isDirty = false;
    this.router.navigate(['events']);
  }
}
