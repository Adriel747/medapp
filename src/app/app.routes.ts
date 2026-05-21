import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login',        loadComponent: () => import('./components/login/login').then(m => m.LoginComponent) },
  { path: 'home',         canActivate: [authGuard], loadComponent: () => import('./components/home/home').then(m => m.HomeComponent) },
  { path: 'odontologia',  canActivate: [authGuard], loadComponent: () => import('./components/odontologia/odontologia').then(m => m.OdontologiaComponent) },
  { path: 'clinica/:id',  canActivate: [authGuard], loadComponent: () => import('./components/clinica-detalle/clinica-detalle').then(m => m.ClinicaDetalleComponent) },
  { path: 'especialistas/:clinicaId/:tratId', canActivate: [authGuard], loadComponent: () => import('./components/especialistas/especialistas').then(m => m.EspecialistasComponent) },
  { path: 'agendar/:clinicaId/:tratId/:espId', canActivate: [authGuard], loadComponent: () => import('./components/agendar/agendar').then(m => m.AgendarComponent) },
  { path: 'reserva-exitosa', canActivate: [authGuard], loadComponent: () => import('./components/reserva-exitosa/reserva-exitosa').then(m => m.ReservaExitosaComponent) },
  { path: 'paquete',      canActivate: [authGuard], loadComponent: () => import('./components/paquete/paquete').then(m => m.PaqueteComponent) },
  { path: 'hoteles',      canActivate: [authGuard], loadComponent: () => import('./components/hoteles/hoteles').then(m => m.HotelesComponent) },
  { path: 'hotel/:id',    canActivate: [authGuard], loadComponent: () => import('./components/hotel-detalle/hotel-detalle').then(m => m.HotelDetalleComponent) },
  { path: 'habitacion/:hotelId/:habId', canActivate: [authGuard], loadComponent: () => import('./components/habitacion-detalle/habitacion-detalle').then(m => m.HabitacionDetalleComponent) },
  { path: 'transportes',    canActivate: [authGuard], loadComponent: () => import('./components/transportes/transportes').then(m => m.TransportesComponent) },
  { path: 'transporte/:id', canActivate: [authGuard], loadComponent: () => import('./components/pasaje-detalle/pasaje-detalle').then(m => m.PasajeDetalleComponent) },
  { path: '**', redirectTo: 'login' }
];
