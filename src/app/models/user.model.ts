export interface User {
  email: string;
  name: string;
  role: 'cliente' | 'admin' | 'operador';
}
