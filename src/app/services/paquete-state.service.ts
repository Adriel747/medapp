import { Injectable, signal } from '@angular/core';

export interface SeleccionHospedaje {
  hotelNombre:      string;
  habitacionNombre: string;
  checkin:          string;
  checkout:         string;
}

export interface SeleccionTransporte {
  transporteNombre: string;
  pasajeNombre:     string;
  fechaViaje:       string;
}

@Injectable({ providedIn: 'root' })
export class PaqueteStateService {
  hospedaje  = signal<SeleccionHospedaje | null>(null);
  transporte = signal<SeleccionTransporte | null>(null);

  setHospedaje(s: SeleccionHospedaje): void   { this.hospedaje.set(s); }
  clearHospedaje(): void                      { this.hospedaje.set(null); }

  setTransporte(s: SeleccionTransporte): void { this.transporte.set(s); }
  clearTransporte(): void                     { this.transporte.set(null); }
}
