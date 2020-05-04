import { Injectable } from '@angular/core';
import {Observable, of, Subject, throwError} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {AlertService} from './alert.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  constructor(private alert: AlertService) { }

  get token() {
    const expDate = new Date(localStorage.getItem('user-auth-token-exp'));

    if (new Date() > expDate) {
      this.logout();
      return null;
    }

    return localStorage.getItem('user-auth-token');
  }

  login(user: {tel: string, password: string}): Observable<any> {
    // return this.http.post
    return of(true)
      .pipe(
        tap(this.setToken),
        catchError(this.handleError.bind(this))
      );
  }

  handleError(error) {
    const {message} = error;

    switch (message) {
      case 'INVALID_TEL':
        this.alert.error('Пользователя с таким телефоном нет');
        break;
      case 'INVALID_PASSWORD':
        this.alert.error('Неверный пароль');
        break;
    }

    return throwError(error);
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  logout() {
    this.setToken(null);
  }

  setToken(response: any) {
    if (response) {
      const expDate = new Date(new Date().getTime() + 3600 * 1000);
      localStorage.setItem('user-auth-token', 'user-auth-token');
      localStorage.setItem('user-auth-token-exp', expDate.toString());
    } else {
      localStorage.clear();
    }
  }
}
