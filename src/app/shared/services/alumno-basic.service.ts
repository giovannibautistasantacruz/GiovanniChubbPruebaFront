import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AlumnoBasico } from '../models/basic/alumno-basico.interface';

const base_url = environment.apiUrl;
const controller ='Alumnos';
@Injectable({
  providedIn: 'root'
})
export class AlumnoBasicService {

  constructor(private http: HttpClient) { }
  GetAlumnos() {
    return this.http.get<AlumnoBasico[]>(`${base_url}/${controller}/GetAlumnos`);
  }

}
