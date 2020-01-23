import { Injectable } from '@angular/core';
import { IUser } from '../user/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class AuthService {
  authToken;
  currentUser: IUser;

  constructor(private http: HttpClient) {}

  loginUser(userName: string, password: string) {
    // console.log({username: userName, password: password});
    // this.currentUser = {
    //   id: 1,
    //   userName: userName,
    //   firstName: 'John',
    //   lastName: 'papa',
    // }
    let loginInfo = { username: userName, password: password };
    let options = { headers: new HttpHeaders({ Content_Type: 'application/json' }) };
    return this.http
      .post('/api/login', loginInfo, options)
      .pipe(
        tap(data => {
          this.currentUser = <IUser>data['user'];
        })
      )
      .pipe(
        catchError(err => {
          return of(false);
        })
      );
  }

  checkAuthenticationStatus() {
    this.http
      .get('/api/currentIdentity')
      .pipe(
        tap(data => {
          if (data instanceof Object) {
            this.currentUser = <IUser>data;
          }
        })
      )
      .subscribe();
  }

  isAuthenticated() {
    if (this.currentUser) return true;
    return false;
  }

  updateCurrentuser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;

    let options = { headers: new HttpHeaders({ Content_Type: 'application/json' }) };
    return this.http.put(`/api/users/${this.currentUser.id}`, this.currentUser, options);
  }

  logout() {
    this.currentUser = undefined;
    let options = { headers: new HttpHeaders({ Content_Type: 'application/json' }) };
    return this.http.post('/api/logout', {}, options);
  }
}
