import { Observable } from 'rxjs';
import { Login_user } from '../models/login.models';

export interface AdminGetaway {
  loginAdmin(email: string, password: string): Observable<Login_user>;
}
