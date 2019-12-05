import { Component, Input } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  templateUrl: 'event-thumbnail.component.html'
})
export class EventThumbnailComponent {
  @Input() event: any;
  templateVar = {
    value: 'This is template variable passed from child to parent.',
    scope: 'It can access any public member of this class.'
  };
  templateVarFunc() {
    return 'Call the template variable function to get the data from child component.';
  }
}
