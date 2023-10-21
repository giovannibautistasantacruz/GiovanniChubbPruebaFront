import { AbstractControl, FormGroup } from "@angular/forms";
import { DatosUsuario } from "../basic/datos-usuario.interface";

export interface UsuarioRegistroFormGroup extends FormGroup{
   value : DatosUsuario;

  controls : {
    password: AbstractControl;
    repeatPassword: AbstractControl;
    idCatDepartamento: AbstractControl;
  }
}
