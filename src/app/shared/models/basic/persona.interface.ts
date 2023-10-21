export interface Persona {
  nombre? : string,
  paterno? : string,
  fechaNacimiento? : Date,
  email? : string,
  celular? : string,
  telefonoEmergencia? : string,
  materno? : string,
  telefonoCasa? : string,
  sexo?: string,
  curp?: string,
  idLugarNacimiento?: number,
  lugarNacimiento?: string,
  isNacional?:boolean
}
