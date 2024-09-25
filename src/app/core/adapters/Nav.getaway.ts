import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LouisonService } from './in-memory.getaway';

@Injectable({
  providedIn: 'root'
})
export class AllService extends LouisonService {
  
  getAllNav(url: string): Observable<any[]> {
    return this.getAll(url);
  }
}
