import { Injectable, signal, computed } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private readonly USERS = [
    { email: 'cliente@gmail.com', password: '123', name: 'Cliente', role: 'cliente' as const }
  ];

  private _currentUser = signal<User | null>(null);

  readonly currentUser = this._currentUser.asReadonly();
  readonly isLoggedIn  = computed(() => this._currentUser() !== null);

  constructor(private router: Router) {}

  login(email: string, password: string): boolean {
    const found = this.USERS.find(
      u => u.email === email.trim().toLowerCase()
        && u.password === password
    );
    if (!found) return false;
    const { password: _omit, ...user } = found;
    this._currentUser.set(user);
    return true;
  }

  logout(): void {
    this._currentUser.set(null);
    this.router.navigate(['/login']);
  }
}
