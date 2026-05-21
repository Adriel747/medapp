import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelesService } from '../../services/hoteles.service';
import { PaqueteStateService } from '../../services/paquete-state.service';
import { Hotel, Habitacion } from '../../models/hotel.model';
import { BottomNavComponent } from '../bottom-nav/bottom-nav';

@Component({
  selector: 'app-habitacion-detalle',
  standalone: true,
  imports: [BottomNavComponent],
  templateUrl: './habitacion-detalle.html',
  styleUrl: './habitacion-detalle.css'
})
export class HabitacionDetalleComponent implements OnInit {
  private route        = inject(ActivatedRoute);
  private router       = inject(Router);
  private hotelService = inject(HotelesService);
  private paqState     = inject(PaqueteStateService);

  hotel      = signal<Hotel | undefined>(undefined);
  habitacion = signal<Habitacion | undefined>(undefined);

  readonly today   = new Date();
  viewDate         = signal(new Date());
  checkin          = signal<Date | null>(null);
  checkout         = signal<Date | null>(null);
  pickingCheckout  = signal(false);

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

  get calendarLabel(): string {
    if (!this.checkin()) return 'Selecciona check-in';
    if (!this.checkout()) return 'Selecciona check-out';
    return '';
  }

  ngOnInit(): void {
    const hotelId = this.route.snapshot.paramMap.get('hotelId') ?? '';
    const habId   = this.route.snapshot.paramMap.get('habId')   ?? '';
    const hotel   = this.hotelService.getById(hotelId);
    this.hotel.set(hotel);
    this.habitacion.set(hotel?.habitaciones.find(h => h.id === habId));
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

    if (!this.checkin() || this.pickingCheckout() === false) {
      this.checkin.set(date);
      this.checkout.set(null);
      this.pickingCheckout.set(true);
    } else {
      if (date <= this.checkin()!) {
        this.checkin.set(date);
        this.checkout.set(null);
      } else {
        this.checkout.set(date);
        this.pickingCheckout.set(false);
      }
    }
  }

  isDayInRange(day: number | null): boolean {
    if (!day || !this.checkin() || !this.checkout()) return false;
    const d    = this.viewDate();
    const date = new Date(d.getFullYear(), d.getMonth(), day);
    return date > this.checkin()! && date < this.checkout()!;
  }

  isCheckin(day: number | null): boolean {
    if (!day || !this.checkin()) return false;
    const d = this.viewDate();
    const ci = this.checkin()!;
    return ci.getDate() === day && ci.getMonth() === d.getMonth() && ci.getFullYear() === d.getFullYear();
  }

  isCheckout(day: number | null): boolean {
    if (!day || !this.checkout()) return false;
    const d = this.viewDate();
    const co = this.checkout()!;
    return co.getDate() === day && co.getMonth() === d.getMonth() && co.getFullYear() === d.getFullYear();
  }

  isPast(day: number | null): boolean {
    if (!day) return false;
    const d     = this.viewDate();
    const date  = new Date(d.getFullYear(), d.getMonth(), day);
    const today = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate());
    return date < today;
  }

  cancelar(): void { window.history.back(); }

  elegir(): void {
    if (!this.checkin() || !this.checkout()) return;
    const fmt = (d: Date) => d.toLocaleDateString('es-ES', { day: 'numeric', month: 'short' });
    this.paqState.setHospedaje({
      hotelNombre:      this.hotel()!.nombre,
      habitacionNombre: this.habitacion()!.nombre,
      checkin:          fmt(this.checkin()!),
      checkout:         fmt(this.checkout()!)
    });
    this.router.navigate(['/paquete']);
  }

  goBack(): void { window.history.back(); }
}
