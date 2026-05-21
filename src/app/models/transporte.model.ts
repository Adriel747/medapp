export interface TipoPasaje {
  id: string;
  nombre: string;
  imagen: string;
  descripcion: string;
  precio: number;
}

export interface Transporte {
  id: string;
  nombre: string;
  descripcion: string;
  imagen: string;
  tipo: 'aéreo' | 'terrestre';
  pasajes: TipoPasaje[];
}
