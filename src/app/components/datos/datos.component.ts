import { Component, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent {
  @ViewChild('foto') fotoElement: any;
  fotoUrl: any;

  constructor(private sanitizer: DomSanitizer) {}

  ngAfterViewInit() {
    this.loadFoto();
  }

  loadFoto() {
    const fotoPath = 'assets/elian.jpeg'; // Ruta de la imagen en la carpeta "assets"
    this.fotoUrl = this.sanitizer.bypassSecurityTrustUrl(fotoPath);
  }
  nombre: string = 'Joselyne Eliana';
  apellido: string = 'Quiñonez Vernaza';
  correo: string = 'joselyne.quinonezv@ug.edu.ec';

}
