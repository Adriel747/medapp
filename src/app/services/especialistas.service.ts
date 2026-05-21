import { Injectable } from '@angular/core';
import { Especialista } from '../models/especialista.model';

@Injectable({ providedIn: 'root' })
export class EspecialistasService {

  private lista: Especialista[] = [
    {
      id: 'dr-marcos-villa',
      nombre: 'Dr. Marcos Villa',
      especialidad: 'Ortodoncista',
      descripcion: 'Mi objetivo es lograr sonrisas armónicas y funcionales mediante tratamientos personalizados con brackets o alineadores.',
      imagen: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&q=80',
      tratamientoIds: ['ortodoncia']
    },
    {
      id: 'dr-javier-rios',
      nombre: 'Dr. Javier Ríos',
      especialidad: 'Ortodoncista',
      descripcion: 'Especialista en ortodoncia, dedicado a mejorar la alineación dental y la salud bucal de mis pacientes.',
      imagen: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&q=80',
      tratamientoIds: ['ortodoncia']
    },
    {
      id: 'dra-elena-perez',
      nombre: 'Dra. Elena Pérez',
      especialidad: 'Endodoncista',
      descripcion: 'Especialista en tratamientos de conducto, con más de 10 años de experiencia en endodoncia avanzada.',
      imagen: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&q=80',
      tratamientoIds: ['endodoncia']
    },
    {
      id: 'dr-carlos-mendez',
      nombre: 'Dr. Carlos Méndez',
      especialidad: 'Periodoncista',
      descripcion: 'Experto en el diagnóstico y tratamiento de enfermedades de las encías y estructuras de soporte dental.',
      imagen: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&q=80',
      tratamientoIds: ['periodoncia']
    },
    {
      id: 'dra-sofia-luna',
      nombre: 'Dra. Sofía Luna',
      especialidad: 'Odontología Estética',
      descripcion: 'Especialista en blanqueamiento dental e implantes, con enfoque en resultados naturales y duraderos.',
      imagen: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&q=80',
      tratamientoIds: ['blanqueamiento', 'implantes']
    }
  ];

  getByTratamiento(tratId: string): Especialista[] {
    return this.lista.filter(e => e.tratamientoIds.includes(tratId));
  }

  getById(id: string): Especialista | undefined {
    return this.lista.find(e => e.id === id);
  }
}
