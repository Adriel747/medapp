import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TransporteService } from '../../services/transporte.service';
import { AuthService } from '../../services/auth.service';
import { Transporte } from '../../models/transporte.model';
import { BottomNavComponent } from '../bottom-nav/bottom-nav';

@Component({
  selector: 'app-transportes',
  standalone: true,
  imports: [BottomNavComponent],
  templateUrl: './transportes.html',
  styleUrl: './transportes.css'
})
export class TransportesComponent {
  private router  = inject(Router);
  private service = inject(TransporteService);
  private auth    = inject(AuthService);

  readonly user  = this.auth.currentUser;
  lista: Transporte[] = this.service.getAll();

  verTransporte(id: string): void {
    this.router.navigate(['/transporte', id]);
  }

  goBack(): void { window.history.back(); }
}
