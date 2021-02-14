import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../models/User';
// import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private user: any;

  //If I will be use methode register then I need HttpClient service, u don't ask me to do that then I only leave it hear 
  // constructor(private http: HttpClient) { }
  constructor() { }

  private subjectOfRegistratedUser = new Subject<User>();
  public obsForNewUser = this.subjectOfRegistratedUser.asObservable();

  setValue(userData: User) {
    this.subjectOfRegistratedUser.next(userData) // Sets the new Observable value that can be listened in components 
    console.log("This what get the service:");
    console.log(userData);
    this.user = userData;
  }

  register(user: any) {
    //Example of Http request
    // return this.http.put(`/v1/accounts/register`, user);
  }

}
