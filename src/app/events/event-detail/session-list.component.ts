import { Component, Input, OnChanges } from '@angular/core';
import { ISession } from '../shared';
import { AuthService } from '../../services/auth.service';
import { VoterService } from './voter.service';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html'
})
export class SessionListComponent implements OnChanges {
  @Input() sessions: ISession[];
  @Input() filterBy: string;
  @Input() sortBy: string;
  @Input() eventId: number;
  visibleSessions: ISession[];

  constructor(private auth: AuthService, private voterService: VoterService) {}

  // reacts when data pass to this component changes
  ngOnChanges() {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
      this.sortBy === 'name'
        ? this.visibleSessions.sort(sortByNameAsc)
        : this.visibleSessions.sort(sortByVotersDesc);
    }
  }

  filterSessions(filter: string) {
    if (filter === 'all') {
      // copy sessions array to an new object reference
      this.visibleSessions = this.sessions.slice(0);
    } else {
      this.visibleSessions = this.sessions.filter(session => {
        return session.level.toLocaleLowerCase() === filter;
      });
    }
  }

  toggleVote(session) {
    if (this.userHasVoted(session)) {
      this.voterService.deleteVoter(this.eventId, session, this.auth.currentUser.userName);
    } else {
      this.voterService.addVoter(this.eventId, session, this.auth.currentUser.userName);
    }
    if (this.sortBy === 'votes') this.visibleSessions.sort(sortByVotersDesc);
  }

  userHasVoted(session) {
    return this.voterService.userHasVoted(session, this.auth.currentUser.userName);
  }
}

// they are stateless functions, so they don't have to be part of a class
function sortByNameAsc(s1: ISession, s2: ISession) {
  if (s1.name > s2.name) {
    return 1;
  } else if (s1.name < s2.name) {
    return -1;
  } else {
    return 0;
  }
}

function sortByVotersDesc(s1: ISession, s2: ISession) {
  return s2.voters.length - s1.voters.length;
}
