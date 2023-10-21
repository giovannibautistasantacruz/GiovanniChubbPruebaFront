import { Persona } from "src/app/shared/models/basic/persona.interface";

export interface RegistroUsuario {
  password:string,
  role:string,
  idDepartamento:number,
  persona:Persona
}
