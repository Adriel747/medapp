import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {
  email    = signal('');
  password = signal('');
  errorMsg = signal('');
  loading  = signal(false);

  constructor(private auth: AuthService, private router: Router) {}

  onLogin(): void {
    this.errorMsg.set('');

    if (!this.email() || !this.password()) {
      this.errorMsg.set('Por favor completa todos los campos.');
      return;
    }

    this.loading.set(true);

    setTimeout(() => {
      const ok = this.auth.login(this.email(), this.password());
      this.loading.set(false);
      if (!ok) {
        this.errorMsg.set('Correo o contraseña incorrectos.');
        return;
      }
      this.router.navigate(['/home']);
    }, 700);
  }
}
