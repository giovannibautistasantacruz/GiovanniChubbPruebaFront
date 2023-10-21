import { AbstractControl, FormGroup } from "@angular/forms";
import { Persona } from "src/app/autentication/usuarios/models/basic/persona.interface";


export interface PersonaFormGroup extends FormGroup{

  value:Persona;

  controls:{
    nombre : AbstractControl;
    apaterno : AbstractControl;
    amaterno : AbstractControl;
    email? : AbstractControl;
    telefono? : AbstractControl;
    direccion? : AbstractControl;
  };

}
