import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { ResponseAPI } from 'src/app/shared/models/basic/responseapi.Interface';
import { environment } from 'src/environments/environment';
import { Persona } from '../models/basic/persona.interface';

const base_url = environment.apiUrl;
const controller ='persona';
@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http: HttpClient) { }


  GetPersonas() {
    return this.http.get<Persona[]>(`${base_url}/${controller}/GetPersonas`);
  }

CreatePersona(persona:Persona){
 return this.http.post(`${base_url}/${controller}/CrearPersona`,persona);
}

DeletePersona(idPersona:number){
return this.http.put(`${base_url}/${controller}/BajaPersona`,idPersona);

}

}
