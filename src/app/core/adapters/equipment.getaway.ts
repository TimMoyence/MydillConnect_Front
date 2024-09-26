import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Equipment } from '../models/equipment.models';
import { EquipmentGetaway } from '../ports/equipment.getaway';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class EquipmentService implements EquipmentGetaway {
  protected static connectedUrl: string = 'equipment/category/';

  constructor(protected http: HttpClient) {}

  getByCategory(categoryName: string): Observable<Equipment[]> {
    return this.http
      .get<Equipment[]>(`${environment.apiURL}${EquipmentService.connectedUrl}${categoryName}`)
      .pipe(
        tap());
  }

 }
