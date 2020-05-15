import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapsibleWellComponent } from './collapsible-well.component';
import { UpvoteComponent } from './upvote.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CollapsibleWellComponent, UpvoteComponent],
  providers: [],
  exports: [CollapsibleWellComponent, UpvoteComponent]
})
export class SharedComponentModule {}
