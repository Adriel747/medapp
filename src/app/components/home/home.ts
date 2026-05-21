import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { BottomNavComponent } from '../bottom-nav/bottom-nav';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BottomNavComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  private auth   = inject(AuthService);
  private router = inject(Router);

  readonly user = this.auth.currentUser;

  services = [
    { label: 'Cirugía Estética',        icon: '💊', color: 'ic-red',    route: 'cirugia'       },
    { label: 'Tratamiento\nOdontológico', icon: '🦷', color: 'ic-blue', route: 'odontologia' },
    { label: 'Check-Up Médico',         icon: '🏥', color: 'ic-violet', route: 'checkup'       },
    { label: 'Med. Alternativa',        icon: '🌿', color: 'ic-green',  route: 'alternativa'   },
    { label: 'Traumatología',           icon: '🦴', color: 'ic-orange', route: 'traumatologia' },
    { label: 'Cardiología',             icon: '❤️', color: 'ic-pink',   route: 'cardiologia'   },
  ];

  goService(route: string): void {
    this.router.navigate(['/' + route]);
  }

  logout(): void {
    this.auth.logout();
  }
}
