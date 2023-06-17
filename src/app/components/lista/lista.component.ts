import { Component } from '@angular/core';
interface ElementoTabla {
  nombre: string;
  apellido: string;
  cuidad: string;
  cedula: string;
  fecha: Date;
}

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  elementos: ElementoTabla[] = [];
  elementosEliminados: ElementoTabla[] = [];
  nombre: string = '';
  apellido: string = '';
  cuidad: string = '';
  cedula: string = '';
  fecha: Date = new Date();

  agregarElemento() {
    const nuevoElemento: ElementoTabla = {
      nombre: this.nombre,
      apellido: this.apellido,
      cuidad: this.cuidad,
      cedula: this.cedula,
      fecha: this.fecha
    };
    this.elementos.push(nuevoElemento);
    this.nombre = '';
    this.apellido = '';
    this.cuidad = '';
    this.cedula = '';
    this.fecha = new Date();
  }
  eliminarElemento(elemento: ElementoTabla) {
    const index = this.elementos.indexOf(elemento);
    if (index !== -1) {
      this.elementos.splice(index, 1);
      this.elementosEliminados.push(elemento);
    }
 }
}
