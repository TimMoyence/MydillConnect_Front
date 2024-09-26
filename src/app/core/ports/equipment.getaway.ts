import { Observable } from 'rxjs';
import { Equipment } from '../models/equipment.models';

export interface EquipmentGetaway {
  getByCategory(categoryName: string): Observable<Equipment[]>;
}
