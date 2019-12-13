import { Component, Input } from '@angular/core';
import { IEvent } from './index';

@Component({
  selector: 'event-thumbnail',
  templateUrl: 'event-thumbnail.component.html'
})
export class EventThumbnailComponent {
  @Input() event: IEvent;
  templateVar = {
    value: 'This is template variable passed from child to parent.',
    scope: 'It can access any public member of this class.'
  };
  templateVarFunc() {
    return 'Call the template variable function to get the data from child component.';
  }
  getStartTimeClass() {
    const isEarlyStart = this.event && this.event.time === '8:00 am';
    return {green: isEarlyStart, bold: isEarlyStart};
    // can also return string 'green bold' | '' or array ['green', 'bold'] | []
  }
}
