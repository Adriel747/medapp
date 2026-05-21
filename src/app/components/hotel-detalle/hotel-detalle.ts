import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelesService } from '../../services/hoteles.service';
import { Hotel } from '../../models/hotel.model';
import { BottomNavComponent } from '../bottom-nav/bottom-nav';

@Component({
  selector: 'app-hotel-detalle',
  standalone: true,
  imports: [BottomNavComponent],
  templateUrl: './hotel-detalle.html',
  styleUrl: './hotel-detalle.css'
})
export class HotelDetalleComponent implements OnInit {
  private route   = inject(ActivatedRoute);
  private router  = inject(Router);
  private service = inject(HotelesService);

  hotel = signal<Hotel | undefined>(undefined);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') ?? '';
    this.hotel.set(this.service.getById(id));
  }

  verHabitacion(habId: string): void {
    this.router.navigate(['/habitacion', this.hotel()!.id, habId]);
  }

  goBack(): void { window.history.back(); }
}
