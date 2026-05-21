import { Injectable } from '@angular/core';
import { Transporte } from '../models/transporte.model';

@Injectable({ providedIn: 'root' })
export class TransporteService {

  private transportes: Transporte[] = [
    {
      id: 'boa',
      nombre: 'BOA',
      descripcion: 'Descubre el encanto de Bolivia en nuestro hotel, un lugar acogedor donde la comodidad y la calidez te esperan. ¡Ven y vive una experiencia inolvidable!',
      imagen: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&q=80',
      tipo: 'aéreo',
      pasajes: [
        {
          id: 'individual',
          nombre: 'Individual',
          imagen: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&q=80',
          descripcion: 'Pasaje individual en vuelo directo. Incluye equipaje de mano y una maleta facturada.',
          precio: 180
        },
        {
          id: 'dos-pasajes',
          nombre: '2 pasajes',
          imagen: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&q=80',
          descripcion: 'Dos pasajes para viajar en compañía. Asientos contiguos garantizados.',
          precio: 340
        },
        {
          id: 'grupo',
          nombre: '+2 pasajes',
          imagen: 'https://images.unsplash.com/photo-1529074963764-98f45c47344b?w=400&q=80',
          descripcion: 'Pasaje grupal para más de 2 personas. Precio por persona con descuento especial.',
          precio: 155
        }
      ]
    },
    {
      id: 'ecojet',
      nombre: 'ECOJET',
      descripcion: 'Descubre el encanto de Bolivia en nuestro hotel, un lugar acogedor donde la comodidad y la calidez te esperan. ¡Ven y vive una experiencia inolvidable!',
      imagen: 'https://images.unsplash.com/photo-1529074963764-98f45c47344b?w=400&q=80',
      tipo: 'aéreo',
      pasajes: [
        {
          id: 'individual',
          nombre: 'Individual',
          imagen: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&q=80',
          descripcion: 'Pasaje individual en clase económica con equipaje incluido.',
          precio: 160
        },
        {
          id: 'dos-pasajes',
          nombre: '2 pasajes',
          imagen: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&q=80',
          descripcion: 'Dos pasajes a precio especial. Servicio a bordo incluido.',
          precio: 300
        },
        {
          id: 'grupo',
          nombre: '+2 pasajes',
          imagen: 'https://images.unsplash.com/photo-1529074963764-98f45c47344b?w=400&q=80',
          descripcion: 'Tarifa grupal con descuento por volumen. Ideal para familias.',
          precio: 135
        }
      ]
    },
    {
      id: 'trans-copacabana',
      nombre: 'TRANS. COPACABANA',
      descripcion: 'Descubre el encanto de Bolivia en nuestro hotel, un lugar acogedor donde la comodidad y la calidez te esperan. ¡Ven y vive una experiencia inolvidable!',
      imagen: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=400&q=80',
      tipo: 'terrestre',
      pasajes: [
        {
          id: 'individual',
          nombre: 'Individual',
          imagen: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&q=80',
          descripcion: 'Asiento individual en bus de primera clase con butaca reclinable y snack.',
          precio: 45
        },
        {
          id: 'dos-pasajes',
          nombre: '2 pasajes',
          imagen: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=400&q=80',
          descripcion: 'Dos asientos contiguos en la misma fila. Comodidad para viajes en pareja.',
          precio: 85
        },
        {
          id: 'grupo',
          nombre: '+2 pasajes',
          imagen: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=400&q=80',
          descripcion: 'Tarifa grupal con asientos reservados en sección exclusiva del bus.',
          precio: 38
        }
      ]
    }
  ];

  getAll(): Transporte[] { return this.transportes; }
  getById(id: string): Transporte | undefined { return this.transportes.find(t => t.id === id); }
}
