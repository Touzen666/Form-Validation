import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User, FormUser } from '../models/User';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  public user = new BehaviorSubject<User | null>(null);
  constructor() { }
  createUser(userData: FormUser) {
    const user = this.mapUser(userData);
    console.log(user);
    this.user.next(user); // Remember user for the session
    // Example of Http request
    // return this.http.put(`/v1/accounts/register`, user);
  }
  mapUser(user: FormUser): User {
    // The specifications were not clear about the mapped data format.
    // I decided to use nested object, instead of flat object with joined strings.
    return {
      Name: {
        FirstName: user.firstName,
        LastName: user.lastName,
      },
      Email: user.email,
      Address: {
        Street: user.street,
        Town: user.town,
        Country: user.country,
      },
      AdditionalInformation: {
        Gender: user.gender,
        AdditionalData: user.textArea,
      }
    }
  }
}
