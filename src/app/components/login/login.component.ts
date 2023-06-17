import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild('loginForm') loginForm!: NgForm;
  onSubmit() {
    if (this.loginForm.valid) {
      // Lógica para procesar el envío del formulario
      console.log('Formulario válido');
      console.log(this.loginForm.value);
      // Realizar las acciones necesarias, como enviar los datos al servidor, realizar validaciones adicionales, etc.
    } else {
      // El formulario no es válido, puedes mostrar mensajes de error o realizar acciones adicionales según tus necesidades.
      console.log('Formulario inválido');
    }
  }
}
