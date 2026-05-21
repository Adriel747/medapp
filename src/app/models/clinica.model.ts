export interface Tratamiento {
  id:     string;
  nombre: string;
  imagen: string;
}

export interface Clinica {
  id:          string;
  nombre:      string;
  descripcion: string;
  imagen:      string;
  tratamientos: Tratamiento[];
}
