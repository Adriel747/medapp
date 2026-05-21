import { Injectable } from '@angular/core';
import { Clinica } from '../models/clinica.model';

@Injectable({ providedIn: 'root' })
export class ClinicasService {

  private clinicas: Clinica[] = [
    {
      id: 'hospital-norte',
      nombre: 'Hospital del Norte',
      descripcion: 'El Hospital del Norte de Cochabamba, ubicado en la zona de Sacaba, es una institución pública de salud.',
      imagen: 'https://www.minsalud.gob.bo/images/noticias21/hospital_del_norte_330.jpg',
      tratamientos: [
        {
          id: 'ortodoncia',
          nombre: 'Ortodoncia',
          imagen: 'https://www.clinicasdentix.com/sites/default/files/brackets.jpeg'
        },
        {
          id: 'endodoncia',
          nombre: 'Endodoncia',
          imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoo3Fx2YfYnX93sS-1Dqn8mMXE5XHpImQBmg&s'
        },
        {
          id: 'periodoncia',
          nombre: 'Periodoncia',
          imagen: 'https://www.clinicadrcalatayud.com/wp-content/uploads/2018/04/periodoncia.jpg'
        }
      ]
    },
    {
      id: 'hospital-viedman',
      nombre: 'Hospital Viedman',
      descripcion: 'El Hospital Viedman de Cochabamba es una institución privada de salud con especialistas en odontología avanzada.',
      imagen: 'https://www.opinion.com.bo/media/opinion/images/2020/03/30/2020033011253720582.jpg',
      tratamientos: [
        {
          id: 'ortodoncia',
          nombre: 'Ortodoncia',
          imagen: 'https://www.clinicasdentix.com/sites/default/files/brackets.jpeg'
        },
        {
          id: 'endodoncia',
          nombre: 'Endodoncia',
          imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoo3Fx2YfYnX93sS-1Dqn8mMXE5XHpImQBmg&s'
        },
        {
          id: 'periodoncia',
          nombre: 'Periodoncia',
          imagen: 'https://www.clinicadrcalatayud.com/wp-content/uploads/2018/04/periodoncia.jpg'
        }
      ]
    },
    {
      id: 'clinica-del-sur',
      nombre: 'Clínica del Sur',
      descripcion: 'Clínica privada especializada en odontología estética y tratamientos dentales de alta complejidad en Cochabamba.',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT50qcMGJihDwUwPRsy5Q7qhai-RkXwDji0nw&s',
      tratamientos: [
        {
          id: 'ortodoncia',
          nombre: 'Ortodoncia',
          imagen: 'hhttps://www.clinicasdentix.com/sites/default/files/brackets.jpeg'
        },
        {
          id: 'blanqueamiento',
          nombre: 'Blanqueamiento',
          imagen: 'hhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdXMi1IJnojfLqaRdH_9GZY2TX5GCTWZtQfg&s'
        },
        {
          id: 'implantes',
          nombre: 'Implantes',
          imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr1eMqfGZtk9W4jPZw8J5DLQRQ1ViGZwT6Bg&s'
        }
      ]
    }
  ];

  getAll(): Clinica[] {
    return this.clinicas;
  }

  getById(id: string): Clinica | undefined {
    return this.clinicas.find(c => c.id === id);
  }
}
