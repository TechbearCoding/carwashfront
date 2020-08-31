import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { map } from 'rxjs/internal/operators/map';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  [x: string]: any;

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  private readonly URL = 'http://127.0.0.1:8080/auth';

  constructor(private http: HttpClient) {
      this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
      this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
      return this.currentUserSubject.value;
  }

  login(username: string, password: string){

    this.http.post(this.URL,JSON.stringify([username, password])).subscribe(
      data  => { 
        localStorage.setItem('currentUser', JSON.stringify(username));
      },
      error  => {console.log("Error", error);}
    );
  }

  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);
  }

  checkIfLogged(){
    let localUrl = "http://127.0.0.1:8080/auth/check";

    this.http.post(localUrl,JSON.stringify(localStorage.getItem('currentUser'))).subscribe(
      data  => { 
        return true;
      },
      error  => {
        return false;
      }
    );
  }
}
