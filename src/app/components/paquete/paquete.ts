import { Component, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { BottomNavComponent } from '../bottom-nav/bottom-nav';

interface OpcionPaquete {
  id: string;
  titulo: string;
  imagen: string;
  btnLabel: string;
  seleccionado: boolean;
}

@Component({
  selector: 'app-paquete',
  standalone: true,
  imports: [BottomNavComponent],
  templateUrl: './paquete.html',
  styleUrl: './paquete.css'
})
export class PaqueteComponent implements OnInit {
  tratNombre = '';

  opciones = signal<OpcionPaquete[]>([
    {
      id: 'hospedaje',
      titulo: 'HOSPEDAJE',
      imagen: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=200&q=80',
      btnLabel: 'VER HOTELES',
      seleccionado: true
    },
    {
      id: 'transporte',
      titulo: 'TRANSPORTE',
      imagen: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=200&q=80',
      btnLabel: 'VER OPCIONES',
      seleccionado: true
    },
    {
      id: 'interprete',
      titulo: 'INTÉRPRETE',
      imagen: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80',
      btnLabel: 'VER INTÉRPRETES',
      seleccionado: true
    }
  ]);

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.tratNombre = (history.state?.tratNombre ?? 'Tratamiento').toUpperCase();
  }

  toggle(id: string): void {
    this.opciones.update(list =>
      list.map(o => o.id === id ? { ...o, seleccionado: !o.seleccionado } : o)
    );
  }

  finalizar(): void {
    this.router.navigate(['/home']);
  }
}
