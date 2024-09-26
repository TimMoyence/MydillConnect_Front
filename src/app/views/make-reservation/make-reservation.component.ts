import { NgIf } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery'; // Import jQuery for datepicker
import { CookieService } from 'ngx-cookie-service';
import { ReservationService } from '../../core/adapters/reservation.getaway';

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './make-reservation.component.html',
  styleUrls: ['./make-reservation.component.css'],
})
export default class ReservationComponent implements OnInit, AfterViewInit {
  equipmentId: string | null = null;
  userId: string = '';  // Retrieved from cookie
  reservationDate: string = ''; // Date selected by user
  equipmentState: string = '';  // State of the equipment from dropdown
  message: string = '';

  constructor(
    private route: ActivatedRoute,
    private reservationService: ReservationService,
    private router: Router,
    private cookieService: CookieService
  ) {}

  ngOnInit(): void {
    // Retrieve equipment ID from the route parameters
    this.equipmentId = this.route.snapshot.paramMap.get('id');
    
    // Retrieve the user ID from the cookie
    this.userId = this.cookieService.get('userId');
  }

  ngAfterViewInit(): void {
  // Initialize Bootstrap datepicker after the view has initialized
//  ($('#reservationDate') as any).datepicker({
//    format: 'yyyy-mm-dd',
//    autoclose: true,
//    todayHighlight: true
//  }).on('changeDate', (e: any) => {
//    this.reservationDate = e.format('yyyy-mm-dd'); // Update the reservationDate model when the date is selected
//  });
}

  makeReservation(): void {
    // Validate that both the equipment state and date are selected
    if (!this.equipmentId || !this.equipmentState || !this.reservationDate) {
      this.message = 'Please select the state of the equipment and reservation date.';
      return;
    }

    // Call the ReservationService's makeReservation method
    this.reservationService
      .makeReservation(
        this.equipmentId!, 
        this.userId, 
        this.reservationDate, 
        this.equipmentState
      )
      .subscribe(
        (response) => {
          this.message = 'Reservation successful!';
          this.router.navigate(['/reservations']); // Navigate to the reservations list after successful reservation
        },
        (error) => {
          this.message = 'Error making reservation';
          console.error(error);
        }
      );
  }
}
