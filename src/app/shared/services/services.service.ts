import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
}
