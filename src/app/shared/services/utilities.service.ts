import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor() { }

  getCurrentDay():string {
    const fechaActual = new Date();
    const dia = fechaActual.getDate().toString().padStart(2, '0');
    const mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0');
    const anio = fechaActual.getFullYear().toString().slice(2);
    const fechaFormateada = `${dia}.${mes}.${anio}`;

    console.log(fechaFormateada);
    return fechaFormateada;
  }
    formularioValido(formulario: FormGroup) {
    if (formulario.invalid) {
      Object.values(formulario.controls).forEach(control=>{
        control.markAllAsTouched();
        control.markAsDirty();
      });

      return false;
    } else {
      return true;
    }
  }

}
