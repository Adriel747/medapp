import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClinicasService } from '../../services/clinicas.service';
import { Clinica } from '../../models/clinica.model';
import { BottomNavComponent } from '../bottom-nav/bottom-nav';

@Component({
  selector: 'app-clinica-detalle',
  standalone: true,
  imports: [BottomNavComponent],
  templateUrl: './clinica-detalle.html',
  styleUrl: './clinica-detalle.css'
})
export class ClinicaDetalleComponent implements OnInit {
  private route    = inject(ActivatedRoute);
  private router   = inject(Router);
  private clinicas = inject(ClinicasService);

  clinicaId = '';
  clinica   = signal<Clinica | undefined>(undefined);

  ngOnInit(): void {
    this.clinicaId = this.route.snapshot.paramMap.get('id') ?? '';
    this.clinica.set(this.clinicas.getById(this.clinicaId));
  }

  verEspecialistas(tratId: string, tratNombre: string): void {
    this.router.navigate(['/especialistas', this.clinicaId, tratId], {
      queryParams: { nombre: tratNombre }
    });
  }

  goBack(): void {
    this.router.navigate(['/odontologia']);
  }
}
