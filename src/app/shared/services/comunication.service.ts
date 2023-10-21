import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ActionType } from '../enum/action-type.enum';

@Injectable({
  providedIn: 'root'
})
export class ComunicationService {


  accion = new BehaviorSubject<ActionType>(ActionType.sinaccion);
  constructor() { }


  setAccion(accionType:ActionType){
    this.accion.next(accionType);
  }

  getAccion(){
    return this.accion.asObservable();
  }
}
