import { Component, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';

interface BookingData {
  doctorNombre:       string;
  doctorEspecialidad: string;
  doctorImagen:       string;
  clinicaNombre:      string;
  tratNombre:         string;
  fecha:              string;
  hora:               string;
  bookingId:          string;
}

@Component({
  selector: 'app-reserva-exitosa',
  standalone: true,
  imports: [],
  templateUrl: './reserva-exitosa.html',
  styleUrl: './reserva-exitosa.css'
})
export class ReservaExitosaComponent implements OnInit {
  booking = signal<BookingData | null>(null);

  constructor(private router: Router) {}

  ngOnInit(): void {
    const state = history.state as BookingData;
    if (state?.bookingId) {
      this.booking.set(state);
    }
  }

  continuarPaquete(): void {
    this.router.navigate(['/paquete'], {
      state: { tratNombre: this.booking()?.tratNombre ?? 'Tratamiento' }
    });
  }

  goHome(): void {
    this.router.navigate(['/home']);
  }
}
