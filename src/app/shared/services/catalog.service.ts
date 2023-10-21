import { Injectable } from '@angular/core';
import { CatalogType } from '../enum/catalog-type.enum';
import { HttpClient } from '@angular/common/http';
import { Catalogo } from '../models/basic/catalogo.interface';
import { environment } from 'src/environments/environment';


const base_url = environment.apiUrl;
const controller ='Catalogos';
@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(private http: HttpClient) { }

   GetCatalogo(catalogo: CatalogType) {
    return this.http.get<Catalogo[]>(`${base_url}/${controller}/${catalogo}`);
  }
}
