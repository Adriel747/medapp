import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransporteService } from '../../services/transporte.service';
import { PaqueteStateService } from '../../services/paquete-state.service';
import { Transporte, TipoPasaje } from '../../models/transporte.model';
import { BottomNavComponent } from '../bottom-nav/bottom-nav';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-pasaje-detalle',
  standalone: true,
  imports: [BottomNavComponent],
  templateUrl: './pasaje-detalle.html',
  styleUrl: './pasaje-detalle.css'
})
export class PasajeDetalleComponent implements OnInit {
  private route      = inject(ActivatedRoute);
  private router     = inject(Router);
  private trnService = inject(TransporteService);
  private paqState   = inject(PaqueteStateService);
  private auth       = inject(AuthService);

  readonly user            = this.auth.currentUser;
  transporte               = signal<Transporte | undefined>(undefined);
  pasajeSeleccionado       = signal<TipoPasaje | undefined>(undefined);

  readonly today = new Date();
  viewDate       = signal(new Date());
  fechaViaje     = signal<Date | null>(null);

  readonly MONTHS = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
  readonly DAYS   = ['Dom','Lun','Mar','Mié','Jue','Vie','Sáb'];

  readonly calendarDays = computed(() => {
    const d = this.viewDate();
    const firstDay    = new Date(d.getFullYear(), d.getMonth(), 1).getDay();
    const daysInMonth = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
    const cells: (number | null)[] = [];
    for (let i = 0; i < firstDay; i++) cells.push(null);
    for (let i = 1; i <= daysInMonth; i++) cells.push(i);
    return cells;
  });

  get monthLabel(): string {
    const d = this.viewDate();
    return `${this.MONTHS[d.getMonth()]} ${d.getFullYear()}`;
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') ?? '';
    this.transporte.set(this.trnService.getById(id));
  }

  seleccionarPasaje(pasaje: TipoPasaje): void {
    this.pasajeSeleccionado.set(pasaje);
    this.fechaViaje.set(null);
  }

  prevMonth(): void {
    const d = this.viewDate();
    this.viewDate.set(new Date(d.getFullYear(), d.getMonth() - 1, 1));
  }

  nextMonth(): void {
    const d = this.viewDate();
    this.viewDate.set(new Date(d.getFullYear(), d.getMonth() + 1, 1));
  }

  selectDay(day: number | null): void {
    if (!day) return;
    const d     = this.viewDate();
    const date  = new Date(d.getFullYear(), d.getMonth(), day);
    const today = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate());
    if (date < today) return;
    this.fechaViaje.set(date);
  }

  isSelected(day: number | null): boolean {
    if (!day || !this.fechaViaje()) return false;
    const d  = this.viewDate();
    const fv = this.fechaViaje()!;
    return fv.getDate() === day && fv.getMonth() === d.getMonth() && fv.getFullYear() === d.getFullYear();
  }

  isPast(day: number | null): boolean {
    if (!day) return false;
    const d     = this.viewDate();
    const date  = new Date(d.getFullYear(), d.getMonth(), day);
    const today = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate());
    return date < today;
  }

  cancelar(): void {
    this.fechaViaje.set(null);
    this.pasajeSeleccionado.set(undefined);
  }

  elegir(): void {
    if (!this.pasajeSeleccionado() || !this.fechaViaje()) return;
    const fmt = (d: Date) => d.toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' });
    this.paqState.setTransporte({
      transporteNombre: this.transporte()!.nombre,
      pasajeNombre:     this.pasajeSeleccionado()!.nombre,
      fechaViaje:       fmt(this.fechaViaje()!)
    });
    this.router.navigate(['/paquete']);
  }

  goBack(): void { window.history.back(); }
}
