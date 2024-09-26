import { CommonModule, NgClass, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { EquipmentService } from '../../core/adapters/equipment.getaway';
import { ReservationService } from '../../core/adapters/reservation.getaway';
import { Equipment } from '../../core/models/equipment.models';

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [NgIf, FormsModule, NgClass, CommonModule],
  templateUrl: './make-reservation.component.html',
  styleUrls: ['./make-reservation.component.css'],
})
export default class ReservationComponent implements OnInit {
  equipmentId: string | null = null;
  userId: string = '';  // Retrieved from cookie
  reservationStartDate: string = '';  // Start date selected by user
  reservationEndDate: string = '';    // End date selected by user
  equipmentState: string = '';        // State of the equipment from dropdown
  message: string = '';
  dateValidationError: boolean = false;
  today: string = new Date().toISOString().split('T')[0]; // Today's date in yyyy-mm-dd format
  equipment: Equipment = {
      equipment_id: 0,
      name: '',
      description: '',
      category: '',
      availability: true,
      status: '',
      reserfation_date: '',
      return_date: '',
      state: '',
    };

  constructor(
    private route: ActivatedRoute,
    private reservationService: ReservationService,
    private router: Router,
    private cookieService: CookieService,
    private equipmentService: EquipmentService,

  ) {}

  ngOnInit(): void {
    // Retrieve equipment ID from the route parameters
    this.equipmentId = this.route.snapshot.paramMap.get('id');
    if (this.equipmentId !== null) {
      this.equipmentService.getById(this.equipmentId).subscribe(
            (data) => {
              this.equipment = data;
      });    
    }
    console.log(this.equipmentId);
    // Retrieve the user ID from the cookie
    this.userId = this.cookieService.get('user_id');

    if(!this.userId || this.userId === '') {
      this.router.navigate(['/admin/login']);
    }
  }

  makeReservation(): void {
    // Validate that the start and end dates are valid
    if (!this.equipmentId || !this.equipmentState || !this.reservationStartDate || !this.reservationEndDate) {
      this.message = 'Please complete the form with the necessary details.';
      return;
    }

    if (new Date(this.reservationStartDate) > new Date(this.reservationEndDate)) {
      this.dateValidationError = true;
      this.message = '';
      return;
    } else {
      this.dateValidationError = false;
    }

    this.reservationService
      .makeReservation(
        this.equipmentId!, 
        this.userId, 
        this.reservationStartDate, 
        this.equipmentState
      )
      .subscribe(
        (response) => {
          this.message = 'Reservation successful!';
          this.router.navigate(['/reservations-done']); // Navigate to the reservations list after successful reservation
        },
        (error) => {
          this.message = 'Error making reservation';
          console.error(error);
        }
      );
  }
}
