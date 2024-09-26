import { Observable } from 'rxjs';
import { Reservation } from '../models/reservation.models';

export interface ReservationGetaway {
  postReservationById(id: number): Observable<Reservation>;
  putReservationById(id: number): Observable<Reservation>;
}