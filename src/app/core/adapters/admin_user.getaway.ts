import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Login_user } from '../models/login.models';
import { AdminGetaway } from '../ports/admin_user.getaway';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AdminService implements AdminGetaway {
  protected static connectedUrl: string = 'login';

  constructor(protected http: HttpClient) {}

  loginAdmin(email: string, password: string): Observable<Login_user> {
    return this.http
      .post<Login_user>(
        environment.apiURL + AdminService.connectedUrl,
        {
          email,
          password,
        },
        httpOptions
      )
      .pipe(tap());
  }

  // isAuthenticated(): Observable<any> {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //     }),
  //     withCredentials: true,
  //   };
  //   console.log(environment.apiURL);
  //   return this.http
  //     .post<any>(`${environment.apiURL}admin/isAuthenticated`, httpOptions)
  //     .pipe();
  // }

  isAuthenticated(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      withCredentials: true,
    };
    return this.http
      .post<any>(`${environment.apiURL}admin/isAuthenticated`, {}, httpOptions)
      .pipe();
  }

  logoutAdmin(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      withCredentials: true,
    };
    return this.http
      .get<any>(`${environment.apiURL}/admin/logout`, httpOptions)
      .pipe(tap());
  }

  // private log(response: any) {
  //   console.log(response);
  // }
}
