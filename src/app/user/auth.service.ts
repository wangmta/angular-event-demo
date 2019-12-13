import { Injectable } from '@angular/core';
import { IUser } from './user.model'

@Injectable()
export class AuthService {

  currentUser: IUser

  loginUser(userName: string, password: string) {
    console.log({username: userName, password: password});
    this.currentUser = {
      id: 1,
      userName: userName,
      firstName: 'John',
      lastName: 'papa',
    }
  }

  isAuthenticated() {
    if (this.currentUser)
    return true;
    return false;
  }

  updateCurrentuser(firstName:string, lastName:string) {
    this.currentUser.firstName = firstName
    this.currentUser.lastName = lastName
  }
}
