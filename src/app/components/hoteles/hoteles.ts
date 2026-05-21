import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { HotelesService } from '../../services/hoteles.service';
import { AuthService } from '../../services/auth.service';
import { Hotel } from '../../models/hotel.model';
import { BottomNavComponent } from '../bottom-nav/bottom-nav';

@Component({
  selector: 'app-hoteles',
  standalone: true,
  imports: [BottomNavComponent],
  templateUrl: './hoteles.html',
  styleUrl: './hoteles.css'
})
export class HotelesComponent {
  private router  = inject(Router);
  private service = inject(HotelesService);
  private auth    = inject(AuthService);

  readonly user  = this.auth.currentUser;
  lista: Hotel[] = this.service.getAll();

  verHotel(id: string): void {
    this.router.navigate(['/hotel', id]);
  }

  goBack(): void { window.history.back(); }
}
