import { Persona } from './models/basic/persona.interface';

//Librerias Angular
import { CommonModule } from '@angular/common';
import{NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
//LibreriasExternas
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {DividerModule} from 'primeng/divider';
import { ToastModule } from 'primeng/toast';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TableModule } from 'primeng/table';
import { StepsModule } from 'primeng/steps';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DialogModule } from 'primeng/dialog';
import { TooltipModule } from 'primeng/tooltip';
//Modulos/Componentes/etc. propios
import { ShowMessageService } from './services/show-message.service';
import { DatosPersonalesComponent } from './components/datos-personales/datos-personales.component';
import { CustomValidatorsComponent } from './components/custom-validators/custom-validators.component';
import { InputSwitchModule } from 'primeng/inputswitch';


@NgModule({
    declarations: [
       //Propias
      DatosPersonalesComponent,
       CustomValidatorsComponent
       //Angular

       //Externas
  ],
    imports: [
      //Propias
      //Angular
      RouterModule,
      CommonModule,
      ReactiveFormsModule,
      FormsModule,
      //Externas
      InputTextModule,
      PasswordModule,
      DividerModule,
      ToastModule,
      ProgressSpinnerModule,
      TableModule,
      StepsModule,
      CardModule,
      DropdownModule,
      CalendarModule,
      RadioButtonModule,
      DialogModule,
      TooltipModule,
      InputSwitchModule
    ],
    exports:[
      //Propias
      DatosPersonalesComponent,
      //Angular
      ReactiveFormsModule,
      FormsModule,
      //Externas
      InputTextModule,
      PasswordModule,
      DividerModule,
      ToastModule,
      ProgressSpinnerModule,
      TableModule,
      StepsModule,
      CardModule,
      DropdownModule,
      CalendarModule,
      RadioButtonModule,
      DialogModule,
      TooltipModule,
      InputSwitchModule
    ],
    providers:[
      ShowMessageService
    ]
})
export class sharedModule{

}
