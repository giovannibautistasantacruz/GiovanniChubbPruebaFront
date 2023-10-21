import { AbstractControl, FormGroup } from "@angular/forms";
import { Persona } from "../basic/persona.interface";

export interface PersonaFormGroup extends FormGroup{

  value:Persona;

  controls:{
    nombre : AbstractControl;
    paterno : AbstractControl;
    fechaNacimiento? : AbstractControl,
    email? : AbstractControl,
    celular? : AbstractControl,
    telefonoEmergencia? : AbstractControl,
    materno? : AbstractControl,
    telefonoCasa? : AbstractControl,
    sexo?: AbstractControl,
    curp?: AbstractControl,
    idLugarNacimiento: AbstractControl,
    lugarNacimiento?: AbstractControl,
    isNacional?: AbstractControl
  };

}
