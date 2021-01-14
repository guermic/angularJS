import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../entities/user';
import { environment } from '../../../environments/environment';
import { SessionService } from './session.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(

    private httpClient: HttpClient,
    private sessionService: SessionService
    
  ) { }

  static user: User = null;

  static get isSignedIn(): boolean {
    return !!AuthService.user;
  }

  signin(email: string, password: string): Observable<any> {
    return this.httpClient.post(
      `${environment.api}/api/login_check`,
      { 
        email: email, 
        password: password
      }
    ).pipe(
      //regarde ce qu'il y a dans le flux sans le modifier
      tap((result) => {
        this.sessionService.setToken(result.token);
      })
    )
  }

  signup(user: User): Observable<any> {
    return this.httpClient.post(
      `${environment.api}/api/signup`,
      user
    )
  }

  //méthode pour info de l'utilisateur connecté
  // vérifier si user connecté et récupéré données user
  //https://api-teaching.wecolearn.com/api/ping
  me(): Observable<any> {
    return this.httpClient.get (
      `${environment.api}/api/ping`,
    ).pipe( tap( (user: User) => {
      AuthService.user = user;
    }));
  }

  signout():void {
    this.sessionService.clear();
    AuthService.user = null;
  }

}
