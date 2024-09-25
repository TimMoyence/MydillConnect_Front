import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AdminService } from '../../../../core/adapters/admin_user.getaway';

@Component({
  selector: 'app-admin-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './admin-nav.component.html',
  styleUrl: './admin-nav.component.css',
})
export default class AdminNavComponent {
  constructor(private adminService: AdminService, private router: Router) {}

  logout() {
    this.adminService.logoutAdmin().subscribe((response) => {
      this.router.navigate(['/']);
    });
  }
}
