import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

import { AuthenticationModel } from './../models/authentication.model';
import { RegistrationModel } from '../models/registration.model';

import { environment } from './../../environments/environment';

export interface TokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  userName: string;
  issued: string;
  expires: string;
}

@Injectable()
export class AccountProvider {

  private headers: HttpHeaders;
  private routePrefix = `${environment.url}/Account`;

  public routes = {
    getToken: `${environment.url}/Token`,
    register: `${this.routePrefix}/Register`
  };

  private handleError(error: any): Observable<any> {
    // tslint:disable-next-line:curly
    if (error.status === 0)
      return Observable.throw('Erro de conexão.');

    return Observable.throw(error.error.error_description);
  }

  constructor(private http: HttpClient) { }

  Authenticate(user: AuthenticationModel): Observable<TokenResponse> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
    };
    const body = `grant_type=password&userName=${user.username}&password=${user.password}`;

    return this.http.post<TokenResponse>(this.routes.getToken, body, httpOptions)
      .pipe(
        tap((token: TokenResponse) => token as TokenResponse),
        catchError(this.handleError)
      );
  }

  Register(newUser: RegistrationModel): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post<any>(this.routes.register, newUser, httpOptions)
      .pipe(
        tap((response: any) => response),
        catchError(this.handleError)
      );
  }

}
