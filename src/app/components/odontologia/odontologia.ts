import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ClinicasService } from '../../services/clinicas.service';
import { Clinica } from '../../models/clinica.model';
import { BottomNavComponent } from '../bottom-nav/bottom-nav';

@Component({
  selector: 'app-odontologia',
  standalone: true,
  imports: [BottomNavComponent],
  templateUrl: './odontologia.html',
  styleUrl: './odontologia.css'
})
export class OdontologiaComponent {
  private router   = inject(Router);
  private clinicas = inject(ClinicasService);

  lista: Clinica[] = this.clinicas.getAll();

  verClinica(id: string): void {
    this.router.navigate(['/clinica', id]);
  }

  goBack(): void {
    this.router.navigate(['/home']);
  }
}
