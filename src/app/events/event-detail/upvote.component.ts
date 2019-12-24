import { Input, Output, EventEmitter, Component } from '@angular/core';

@Component({
  selector: 'upvote',
  template: `
    <div class="votingWidgetContainer pointable" (click)="onClick()">
      <div class="well votingWidget">
        <div class="votingButton">
          <li [style.color]="iconColor" class="glyphicon glyphicon-heart"></li>
        </div>
        <div class="badge badge-inverse votingCount">
          <div>{{ count }}</div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./upvote.component.css']
})
export class UpvoteComponent {
  @Input() count: number;
  // @Input() voted: boolean;
  @Output() vote = new EventEmitter();
  @Input() set voted(val) {
    this.iconColor = val ? 'red' : 'white';
  }
  iconColor: string;

  onClick() {
    this.vote.emit({});
  }
}

// <li *ngIf="voted" class="glyphicon glyphicon-heart"></li>
// <li *ngIf="!voted" class="glyphicon glyphicon-heart-empty"></li>
