import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EspecialistasService } from '../../services/especialistas.service';
import { ClinicasService } from '../../services/clinicas.service';
import { Especialista } from '../../models/especialista.model';
import { BottomNavComponent } from '../bottom-nav/bottom-nav';

@Component({
  selector: 'app-agendar',
  standalone: true,
  imports: [BottomNavComponent],
  templateUrl: './agendar.html',
  styleUrl: './agendar.css'
})
export class AgendarComponent implements OnInit {
  private route       = inject(ActivatedRoute);
  private router      = inject(Router);
  private espService  = inject(EspecialistasService);
  private clinService = inject(ClinicasService);

  especialista  = signal<Especialista | undefined>(undefined);
  clinicaNombre = '';
  tratNombre    = '';

  readonly today     = new Date();
  viewDate           = signal(new Date());
  selectedDate       = signal<Date | null>(null);
  selectedTime       = signal<string | null>(null);

  readonly TIMES  = ['09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM', '04:00 PM'];
  readonly MONTHS = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
  readonly DAYS   = ['Dom','Lun','Mar','Mié','Jue','Vie','Sáb'];

  readonly calendarDays = computed(() => {
    const d = this.viewDate();
    const firstDay     = new Date(d.getFullYear(), d.getMonth(), 1).getDay();
    const daysInMonth  = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
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
    const clinicaId = this.route.snapshot.paramMap.get('clinicaId') ?? '';
    const espId     = this.route.snapshot.paramMap.get('espId') ?? '';
    this.tratNombre  = this.route.snapshot.queryParamMap.get('nombre') ?? 'Tratamiento';
    this.especialista.set(this.espService.getById(espId));
    this.clinicaNombre = this.clinService.getById(clinicaId)?.nombre ?? '';
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
    const d = this.viewDate();
    const date = new Date(d.getFullYear(), d.getMonth(), day);
    const today = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate());
    if (date < today) return;
    this.selectedDate.set(date);
  }

  isSelected(day: number | null): boolean {
    if (!day || !this.selectedDate()) return false;
    const d   = this.viewDate();
    const sel = this.selectedDate()!;
    return sel.getDate() === day && sel.getMonth() === d.getMonth() && sel.getFullYear() === d.getFullYear();
  }

  isPast(day: number | null): boolean {
    if (!day) return false;
    const d    = this.viewDate();
    const date = new Date(d.getFullYear(), d.getMonth(), day);
    const today = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate());
    return date < today;
  }

  isToday(day: number | null): boolean {
    if (!day) return false;
    const d = this.viewDate();
    return d.getFullYear() === this.today.getFullYear() &&
      d.getMonth()    === this.today.getMonth() &&
      day             === this.today.getDate();
  }

  confirmar(): void {
    if (!this.selectedDate() || !this.selectedTime()) return;
    const esp = this.especialista();
    if (!esp) return;

    const state = {
      doctorNombre:        esp.nombre,
      doctorEspecialidad:  esp.especialidad,
      doctorImagen:        esp.imagen,
      clinicaNombre:       this.clinicaNombre,
      tratNombre:          this.tratNombre,
      fecha:               this.selectedDate()!.toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' }),
      hora:                this.selectedTime()!,
      bookingId:           'MPC-' + Math.floor(10000 + Math.random() * 90000)
    };

    this.router.navigate(['/reserva-exitosa'], { state });
  }

  goBack(): void {
    window.history.back();
  }
}
