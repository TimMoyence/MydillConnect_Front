import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationService } from '../../core/adapters/reservation.getaway';

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [],
  templateUrl: './make-reservation.component.html',
  styleUrls: ['./make-reservation.component.css'],

})
export default class ReservationComponent implements OnInit {
  equipmentId: string | null = null;
  userId: string = '1';  // Replace with actual user ID from authentication
  reservationDate: string = new Date().toISOString().split('T')[0];
  equipmentState: string = '';
  message: string = '';

  constructor(
    private route: ActivatedRoute,
    private reservationService: ReservationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.equipmentId = this.route.snapshot.paramMap.get('id');
  }

  makeReservation(): void {
    if (!this.equipmentId || !this.equipmentState) {
      this.message = 'Please select the state of the equipment.';
      return;
    }

    this.reservationService
      .makeReservation(this.equipmentId, this.userId, this.reservationDate, this.equipmentState)
      .subscribe(
        (reservation) => {
          this.message = 'Reservation successful!';
          this.router.navigate(['accueil']);
        },
        (error) => {
          this.message = 'Error making reservation';
          console.error(error);
        }
      );
  }

}