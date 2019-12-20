import { Component } from '@angular/core';
import { AuthService } from '../user';
import { ISession, EventService } from '../events';

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
  searchTerm: string;
  foundSessions: ISession[];

  constructor(private auth: AuthService, private eventService: EventService) {}

  searchSessions(searchTerm) {
    this.eventService.searchSessions(searchTerm).subscribe(sessions => {
      this.foundSessions = sessions;
      console.log(this.foundSessions);
    });
  }
}
