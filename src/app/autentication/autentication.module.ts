
//Librerias Angular
import { CommonModule } from '@angular/common';
import{NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

//LibreriasExternas

//Modulos/Componentes/etc. propios
import { autenticationRoutingModule } from './autentication-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './dashboard/components/header/header.component';
import { SidebarComponent } from './dashboard/components/sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { sharedModule } from '../shared/shared.module';
import { ProcesoUsuarioComponent } from './usuarios/components/proceso-usuario/proceso-usuario.component';
import { MessageService } from 'primeng/api';

@NgModule({
    declarations: [
    DashboardComponent,
         HeaderComponent,
         SidebarComponent,
         HomeComponent,
         UsuariosComponent,
         ProcesoUsuarioComponent,

  ],
    imports: [
      //Propias
      autenticationRoutingModule,
      sharedModule,
      //Angular
      RouterModule,
      CommonModule,
      ReactiveFormsModule
      //Externas

    ],
  providers:[
    MessageService
  ]
})
export class autenticationModule{

}
