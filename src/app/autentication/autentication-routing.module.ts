import {Component, NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ProcesoUsuarioComponent } from './usuarios/components/proceso-usuario/proceso-usuario.component';
import { DatosPersonalesComponent } from '../shared/components/datos-personales/datos-personales.component';

const rutas:Routes = [
    {path:'',children:[
        {path:'home', component: HomeComponent},
        {path:'personas', component: UsuariosComponent},

        {path:'**',redirectTo:'home'}
    ]}
];
@NgModule({
    imports:[
        RouterModule.forChild(rutas)
    ],
    exports:[
        RouterModule
    ]
})
export class autenticationRoutingModule{}
