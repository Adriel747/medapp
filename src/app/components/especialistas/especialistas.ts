import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EspecialistasService } from '../../services/especialistas.service';
import { Especialista } from '../../models/especialista.model';
import { BottomNavComponent } from '../bottom-nav/bottom-nav';

@Component({
  selector: 'app-especialistas',
  standalone: true,
  imports: [BottomNavComponent],
  templateUrl: './especialistas.html',
  styleUrl: './especialistas.css'
})
export class EspecialistasComponent implements OnInit {
  private route   = inject(ActivatedRoute);
  private router  = inject(Router);
  private service = inject(EspecialistasService);

  clinicaId  = '';
  tratId     = '';
  tratNombre = '';
  lista      = signal<Especialista[]>([]);
  expandedId = signal<string | null>(null);

  ngOnInit(): void {
    this.clinicaId  = this.route.snapshot.paramMap.get('clinicaId') ?? '';
    this.tratId     = this.route.snapshot.paramMap.get('tratId') ?? '';
    this.tratNombre = this.route.snapshot.queryParamMap.get('nombre') ?? 'Tratamiento';
    this.lista.set(this.service.getByTratamiento(this.tratId));
  }

  elegir(esp: Especialista): void {
    this.router.navigate(['/agendar', this.clinicaId, this.tratId, esp.id], {
      queryParams: { nombre: this.tratNombre }
    });
  }

  toggleSaber(id: string): void {
    this.expandedId.set(this.expandedId() === id ? null : id);
  }

  goBack(): void {
    this.router.navigate(['/clinica', this.clinicaId]);
  }
}
