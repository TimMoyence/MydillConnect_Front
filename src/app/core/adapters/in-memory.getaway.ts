import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class LouisonService {
  constructor(protected http: HttpClient) {}

  protected getAll<T>(url: string): Observable<T[]> {
    return this.http.get<T[]>(environment.apiURL + url).pipe();
  }

  protected getOne<T>(url: string, id: string): Observable<T> {
    return this.http.get<T>(environment.apiURL + url + '/' + id).pipe();
  }

  protected create<T>(url: string, obj: T): Observable<T> {
    return this.http.post<T>(environment.apiURL + url, obj, httpOptions).pipe();
  }

  protected update<T>(url: string, obj: T): Observable<T> {
    return this.http.patch<T>(environment.apiURL + url, obj).pipe();
  }

  protected delete<T>(url: string, id: string): Observable<T> {
    return this.http.delete<T>(environment.apiURL + url + '/' + id).pipe();
  }

  private log(response: any) {
    console.table(response);
  }
}
