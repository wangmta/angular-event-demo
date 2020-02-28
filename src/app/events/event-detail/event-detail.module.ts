import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EventDetailsComponent } from './event-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateSessionModule } from '../create-session/create-session.module';
import { SessionListModule } from '../session-list/session-list.module';

const evDetailRoute: Routes = [
  {
    path: '',
    component: EventDetailsComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(evDetailRoute),
    CreateSessionModule,
    SessionListModule
  ],
  declarations: [EventDetailsComponent],
  providers: []
})
export class EventDetailModule {}
