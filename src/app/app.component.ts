import { Component } from '@angular/core';
import { AuthService } from '../services';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'ng-fundamentals';
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.checkAuthenticationStatus();
  }
}
