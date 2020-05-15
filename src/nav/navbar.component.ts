import { Component } from '@angular/core';
import { AuthService } from '../services';
import { ISession } from '../models/event.model';
import { IUser } from '../models/user.model';
import { EventService } from '../services/event.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styles: [
    `
      .nav.navbar-nav {
        font-size: 15px;
      }
      #searForm {
        margin-right: 100px;
      }
      li > a.active {
        color: #f89406;
      }
    `
  ]
})
export class NavBarComponent {
  searchTerm: string = '';
  foundSessions: ISession[];

  constructor(public auth: AuthService, private eventService: EventService) { }

  searchSessions(searchTerm) {
    this.eventService.searchSessions(searchTerm).subscribe(sessions => {
      this.foundSessions = sessions;
      console.log(this.foundSessions);
    });
  }
}

// the active link is pointing to Events since the router set it so ('', redirect to 'events')
