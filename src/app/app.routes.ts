import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () => import('./components/login/login').then(m => m.LoginComponent)
  },
  {
    path: 'home',
    canActivate: [authGuard],
    loadComponent: () => import('./components/home/home').then(m => m.HomeComponent)
  },
  {
    path: 'odontologia',
    canActivate: [authGuard],
    loadComponent: () => import('./components/odontologia/odontologia').then(m => m.OdontologiaComponent)
  },
  {
    path: 'clinica/:id',
    canActivate: [authGuard],
    loadComponent: () => import('./components/clinica-detalle/clinica-detalle').then(m => m.ClinicaDetalleComponent)
  },
  { path: '**', redirectTo: 'login' }
];
