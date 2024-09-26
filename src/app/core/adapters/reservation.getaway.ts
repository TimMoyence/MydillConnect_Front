import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Reservation } from '../models/reservation.models';
import { ReservationGetaway } from '../ports/reservation.getaway';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};


@Injectable({
  providedIn: 'root',
})
export class ReservationService implements ReservationGetaway {
  protected static reservation: string = 'reservation/';

  constructor(protected http: HttpClient) {}

  makeReservation(equipmentId: string, userId: string, reservationDate: string, equipmentState: string): Observable<Reservation> {
      return this.http.post<any>(`${environment.apiURL}${ReservationService.reservation}${equipmentId}`, {
        user_id: userId,
        reservation_date: reservationDate,
        equipment_state: equipmentState
      }).pipe();
    }

  postReservationById(id: number): Observable<Reservation> {
    return this.http
      .post<Reservation>(`${environment.apiURL}${ReservationService.reservation}${id}`, httpOptions)
      .pipe(
        tap());
  }

  putReservationById(id: number): Observable<Reservation> {
    return this.http
      .put<Reservation>(`${environment.apiURL}${ReservationService.reservation}${id}`, httpOptions)
      .pipe(
        tap());
  }

 }
