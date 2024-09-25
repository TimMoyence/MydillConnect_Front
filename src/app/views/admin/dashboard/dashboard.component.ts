import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AdminService } from '../../../core/adapters/admin_user.getaway';
import AdminNavComponent from './admin-nav/admin-nav.component';

@Component({
  selector: 'app-test-protected',
  standalone: true,
  imports: [AdminNavComponent],
  template: `
    <app-admin-nav />
    <!-- <app-graph /> -->
  `,
  styleUrls: ['./dashboard.component.css'], // Corrected from 'styleUrl' to 'styleUrls'
})
export default class dashboard implements OnInit {
  // Use constructor injection for AdminService and CookieService
  constructor(
    private adminService: AdminService,
    private cookieService: CookieService
  ) {}

  ngOnInit(): void {}
}
