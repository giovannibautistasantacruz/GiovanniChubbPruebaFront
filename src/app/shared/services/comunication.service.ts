import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Persona } from '../models/basic/persona.interface';
import { ActionType } from '../enum/action-type.enum';

@Injectable({
  providedIn: 'root'
})
export class ComunicationService {

  datosPersona = new BehaviorSubject<Persona>({});
  accion = new BehaviorSubject<ActionType>(ActionType.sinaccion);
  constructor() { }

  setDatosPersona(datosPersonales:Persona){
    this.datosPersona.next(datosPersonales);
  }

  getDatosPersona(){
    return this.datosPersona.asObservable();
  }

  setAccion(accionType:ActionType){
    this.accion.next(accionType);
  }

  getAccion(){
    return this.accion.asObservable();
  }
}
