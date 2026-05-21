export interface Habitacion {
  id: string;
  nombre: string;
  imagen: string;
  descripcion: string;
  precio: number;
}

export interface Hotel {
  id: string;
  nombre: string;
  descripcion: string;
  imagen: string;
  habitaciones: Habitacion[];
}
