import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AdminService } from '../../../core/adapters/admin_user.getaway';
import { FormLogin } from '../../../core/models/formLogin.models';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export default class LoginComponent {
  FormLogin: FormLogin = new FormLogin();
  private adminService = inject(AdminService);
  private cookieService = inject(CookieService);
  private route = inject(Router);

  OnSubmit(form: NgForm) {
    this.adminService
      .loginAdmin(this.FormLogin.email, this.FormLogin.password)
      .subscribe((response) => {
        if (response.logged === true) {
          // console.log(response);
          this.cookieService.set('user_id', response.user_id.toString());
          this.cookieService.set('jwt', response.token);
          // console.log('Login successful: ', response.message);
          this.route.navigate(['accueil']);
        } else {
          // console.log('Login failed: ', response.message);
        }
        form.resetForm();
      });
  }
}
