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

  clinica = signal<Clinica | undefined>(undefined);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') ?? '';
    this.clinica.set(this.clinicas.getById(id));
  }

  goBack(): void {
    this.router.navigate(['/odontologia']);
  }
}
