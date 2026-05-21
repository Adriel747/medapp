import { Injectable } from '@angular/core';
import { Hotel } from '../models/hotel.model';

@Injectable({ providedIn: 'root' })
export class HotelesService {

  private hoteles: Hotel[] = [
    {
      id: 'camino-plaza',
      nombre: 'Hotel Camino Plaza',
      descripcion: 'Descubre el encanto de Bolivia en nuestro hotel, un lugar acogedor donde la comodidad y la calidez te esperan. ¡Ven y vive una experiencia inolvidable!',
      imagen: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80',
      habitaciones: [
        { id: 'individual', nombre: 'Individual',  imagen: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&q=80', descripcion: 'Habitación cómoda para una persona, con todas las comodidades.', precio: 80  },
        { id: 'doble',      nombre: 'Doble',       imagen: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=400&q=80', descripcion: 'Espaciosa habitación para dos personas con camas twin o matrimonial.', precio: 120 },
        { id: 'queen-size', nombre: 'Queen Size',  imagen: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?w=400&q=80', descripcion: 'Habitación premium con cama queen size y vista panorámica.', precio: 160 }
      ]
    },
    {
      id: 'gran-hotel-cbba',
      nombre: 'Gran Hotel Cochabamba',
      descripcion: 'Descubre el encanto de Bolivia en nuestro hotel, un lugar acogedor donde la comodidad y la calidez te esperan. ¡Ven y vive una experiencia inolvidable!',
      imagen: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&q=80',
      habitaciones: [
        { id: 'individual', nombre: 'Individual',  imagen: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&q=80', descripcion: 'Habitación cómoda para una persona.', precio: 70  },
        { id: 'doble',      nombre: 'Doble',       imagen: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=400&q=80', descripcion: 'Habitación para dos personas.', precio: 110 },
        { id: 'queen-size', nombre: 'Queen Size',  imagen: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?w=400&q=80', descripcion: 'Habitación premium con cama queen size.', precio: 150 }
      ]
    },
    {
      id: 'regina-resort',
      nombre: 'Hotel Regina Resort & Convenciones',
      descripcion: 'Descubre el encanto de Bolivia en nuestro hotel, un lugar acogedor donde la comodidad y la calidez te esperan. ¡Ven y vive una experiencia inolvidable!',
      imagen: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&q=80',
      habitaciones: [
        { id: 'individual', nombre: 'Individual',  imagen: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&q=80', descripcion: 'Habitación cómoda con vista al jardín.', precio: 90  },
        { id: 'doble',      nombre: 'Doble',       imagen: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=400&q=80', descripcion: 'Habitación para dos con piscina incluida.', precio: 130 },
        { id: 'queen-size', nombre: 'Queen Size',  imagen: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?w=400&q=80', descripcion: 'Suite premium con acceso al spa.', precio: 180 }
      ]
    }
  ];

  getAll(): Hotel[] { return this.hoteles; }
  getById(id: string): Hotel | undefined { return this.hoteles.find(h => h.id === id); }
}
