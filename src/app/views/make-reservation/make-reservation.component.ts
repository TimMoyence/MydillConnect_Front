import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-make-reservation',
  standalone: true,
  imports: [],
  templateUrl: './make-reservation.component.html',
  styleUrl: './make-reservation.component.css'
})
export default class ReservationComponent implements OnInit {
  equipmentId: string | null = null;
  userId: string = '1';  // Replace with actual user ID from authentication
  reservationDate: string = new Date().toISOString().split('T')[0];
  equipmentState: string = '';
  message: string = '';

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.equipmentId = this.route.snapshot.paramMap.get('id');
  }

  makeReservation(): void {
    if (!this.equipmentId || !this.equipmentState) {
      this.message = 'Please select the state of the equipment.';
      return;
    }

    this.http.post(`/api/reserve/${this.equipmentId}`, {
      user_id: this.userId,
      reservation_date: this.reservationDate,
      equipment_state: this.equipmentState
    }).subscribe(
      (response: any) => {
        this.message = 'Reservation successful!';
        this.router.navigate(['/reservations']);
      },
      error => {
        this.message = 'Error making reservation';
        console.error(error);
      }
    );
  }
}
