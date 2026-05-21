import { Injectable, signal } from '@angular/core';

export interface SeleccionHospedaje {
  hotelNombre:     string;
  habitacionNombre: string;
  checkin:         string;
  checkout:        string;
}

@Injectable({ providedIn: 'root' })
export class PaqueteStateService {
  hospedaje = signal<SeleccionHospedaje | null>(null);

  setHospedaje(s: SeleccionHospedaje): void { this.hospedaje.set(s); }
  clearHospedaje(): void { this.hospedaje.set(null); }
}
