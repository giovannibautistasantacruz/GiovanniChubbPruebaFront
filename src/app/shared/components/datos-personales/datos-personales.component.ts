import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PersonaFormGroup } from '../../models/formGroup/personaFormGroup.interface';
import { UtilitiesService } from '../../services/utilities.service';
import { Subscription } from 'rxjs';
import { ManageStepService } from '../../services/manageStep.service';
import { ModuleType } from '../../enum/module-type.enum';
import { Cancel } from '../../models/basic/cancel.interface';
import { MessageType } from '../../enum/message-type.enum';
import { ShowMessageService } from '../../services/show-message.service';
import { ComunicationService } from '../../services/comunication.service';
import { ActionType } from '../../enum/action-type.enum';
import { CatalogService } from '../../services/catalog.service';
import { Catalogo } from '../../models/basic/catalogo.interface';
import { CatalogType } from '../../enum/catalog-type.enum';
import { Items } from '../../models/basic/items.interface';
import { Persona } from 'src/app/autentication/usuarios/models/basic/persona.interface';
import { PersonaService } from 'src/app/autentication/usuarios/services/persona.service';
import { ResponseAPI } from '../../models/basic/responseapi.Interface';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.scss']
})
export class DatosPersonalesComponent implements OnInit, OnDestroy{

    loading:boolean = false;
  estados: Catalogo[] = [];
  day:Date = new Date();
  activeIndex: number;
  items:any[]=[];
  manageStepService$: Subscription;
  accion:ActionType = ActionType.sinaccion;
  dpc$: Subscription;
  ngOnInit(): void {

    this.dpc$ = this.dpc.getAccion().subscribe({
      next: (actionType: ActionType) => {
        this.accion = actionType;
        console.log("TipoAcción",this.accion);
        if(this.accion == ActionType.editar || this.accion == ActionType.anterior){
          console.log("acción editar/anterior",this.personaFG);
          //this.personaFG.setValue(this.datosPersona);
        }
      }
      });

  }
  ngOnDestroy(): void {
     this.manageStepService$.unsubscribe();
     //this.dpc$.unsubscribe();
  }
  constructor(
    private fb:FormBuilder,
    private us:UtilitiesService,
    private manageStepService: ManageStepService,
    private sm: ShowMessageService,
    private dpc: ComunicationService,
    private catalogos: CatalogService,
    private personaService: PersonaService) {
      this.manageStepService$ = this.manageStepService.getItems().subscribe({
      next: (dataItems: Items[]) => {
        this.items = dataItems.filter(f=>f.modulo==ModuleType.usuario)[0].items;
        console.log("items",this.items);
      }
    });

  }

  Nacimiento(lugar: any){
    if(lugar == 0){
       this.catalogos.GetCatalogo(CatalogType.CatEstado).subscribe({
        next: (catalogData: Catalogo[]) => {
        this.estados = catalogData;
        console.log("catalogo estados",this.estados);
      }
      });
    } else {
       this.catalogos.GetCatalogo(CatalogType.CatFueraMexico).subscribe({
        next: (catalogData: Catalogo[]) => {
        this.estados = catalogData;
        console.log("catalogo estados",this.estados);
      }
      });
    }
  }


  cancel(){
    let cancelar: Cancel[] =[{ modulo : ModuleType.usuario,cancel : true}];
    this.manageStepService.setcancel(cancelar);
    this.dpc.setAccion(ActionType.sinaccion);
  }
  public personaFG : PersonaFormGroup = this.fb.group({
    nombre: [,[Validators.required,Validators.minLength(3)]],
    apaterno: [,[Validators.required,Validators.minLength(3)]],
    amaterno: [,[Validators.minLength(3)]],
    email: [,[Validators.required,Validators.minLength(3),Validators.email]],
    telefono: [,[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
     direccion: [,[Validators.required,Validators.minLength(3)]]
  }) as PersonaFormGroup;

  haveErrors(controlName:string):boolean{
     return (this.personaFG.get(controlName).errors != null)?true:false;
  }

 guardar(){

 this.loading = true;
    if (this.us.formularioValido(this.personaFG)) {
      let formularioPersona: Persona = this.personaFG.value;
      this.personaService.CreatePersona(formularioPersona).
        subscribe({
          next: (res: ResponseAPI) => {

            this.loading = false;
            console.log("Usuario Guardado",res);
            this.sm.showMessage("userDataMessages", MessageType.success, "¡Exito!", "La persona se guardo correctamente");
            this.cancel();
          },
          error: (err) => {
            //console.log("error en login",err.error);
            this.loading=false
            this.sm.showMessage("userDataMessages", MessageType.error, "¡Error!", "Ocurrio un error,Intentalo más tarde o contacta al administrador.");
          }
        });
    }
     else {
      this.loading=false;
       this.sm.showMessage("userDataMessages", MessageType.error, "¡Error!", 'Por favor captura los datos marcados con "*" o verificalos');
     }

}

}
