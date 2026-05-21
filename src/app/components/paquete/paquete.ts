import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { PaqueteStateService } from '../../services/paquete-state.service';
import { BottomNavComponent } from '../bottom-nav/bottom-nav';

@Component({
  selector: 'app-paquete',
  standalone: true,
  imports: [BottomNavComponent],
  templateUrl: './paquete.html',
  styleUrl: './paquete.css'
})
export class PaqueteComponent implements OnInit {
  private router   = inject(Router);
  readonly paqState = inject(PaqueteStateService);

  tratNombre = '';

  ngOnInit(): void {
    this.tratNombre = (history.state?.tratNombre ?? 'Tratamiento').toUpperCase();
  }

  irHoteles():     void { this.router.navigate(['/hoteles']); }
  irTransporte():  void { /* próxima pantalla */ }
  irInterprete():  void { /* próxima pantalla */ }
  finalizar():     void { this.router.navigate(['/home']); }
}
