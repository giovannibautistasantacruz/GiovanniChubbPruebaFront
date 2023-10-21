import { Index } from './../../models/basic/index.interface';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PersonaFormGroup } from '../../models/formGroup/personaFormGroup.interface';
import { Estado } from '../../models/basic/estado.interface';
import { UtilitiesService } from '../../services/utilities.service';
import { Subscription } from 'rxjs';
import { ManageStepService } from '../../services/manageStep.service';
import { ModuleType } from '../../enum/module-type.enum';
import { Items } from '../../models/basic/items.interface';
import { Cancel } from '../../models/basic/cancel.interface';
import { MessageType } from '../../enum/message-type.enum';
import { ShowMessageService } from '../../services/show-message.service';
import { ComunicationService } from '../../services/comunication.service';
import { ActionType } from '../../enum/action-type.enum';
import { Persona } from '../../models/basic/persona.interface';
import { CatalogService } from '../../services/catalog.service';
import { Catalogo } from '../../models/basic/catalogo.interface';
import { CatalogType } from '../../enum/catalog-type.enum';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.scss']
})
export class DatosPersonalesComponent implements OnInit, OnDestroy{


  estados: Catalogo[] = [];
  day:Date = new Date();
  activeIndex: number;
  items:any[]=[];
  manageStepService$: Subscription;
  datosPersona:Persona={};
  accion:ActionType = ActionType.sinaccion;
  dpc$: Subscription;
  ngOnInit(): void {
    this.manageStepService$ = this.manageStepService.getActivesIndex().subscribe({
      next: (index: Index[]) => {
        this.activeIndex = index.filter(f=>f.modulo==ModuleType.usuario)[0].activeIndex;
        console.log("activeIndex",this.activeIndex);
      }
    });
    this.dpc$ = this.dpc.getDatosPersona().subscribe({
      next: (persona: Persona) => {
        this.datosPersona = persona;
        console.log("Datos persona",this.datosPersona);
      }
    });
    this.dpc$ = this.dpc.getAccion().subscribe({
      next: (actionType: ActionType) => {
        this.accion = actionType;
        console.log("TipoAcción",this.accion);
        if(this.accion == ActionType.editar || this.accion == ActionType.anterior){
          console.log("acción editar/anterior",this.personaFG);
          this.personaFG.setValue(this.datosPersona);
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
    private catalogos: CatalogService) {
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

  prev() {
    this.activeIndex--;
    let index: Index[] =[{ modulo : ModuleType.usuario,activeIndex : this.activeIndex}];
    this.manageStepService.setActiveIndex(index);
    this.dpc.setAccion(ActionType.anterior);
  }

  next() {
    if(this.us.formularioValido(this.personaFG)){
      this.activeIndex++;
      let index: Index[] =[{ modulo : ModuleType.usuario,activeIndex : this.activeIndex}];
      this.manageStepService.setActiveIndex(index);
      let datosPersona = this.personaFG.value;
      if(this.personaFG.get("isNacional").value)
      {
        datosPersona.isNacional = true;
      }else{
        datosPersona.isNacional = false;
      }
      this.dpc.setDatosPersona(datosPersona);
      this.dpc.setAccion(ActionType.siguiente);
    }else{
       this.sm.showMessage("personDataMessages",MessageType.error,"¡Error!",'Por favor captura los datos marcados con "*" o verificalos');
    }

  }
  cancel(){
    let cancelar: Cancel[] =[{ modulo : ModuleType.usuario,cancel : true}];
    this.manageStepService.setcancel(cancelar);
    this.dpc.setAccion(ActionType.sinaccion);
  }
  public personaFG : PersonaFormGroup = this.fb.group({
    nombre: [,[Validators.required,Validators.minLength(3)]],
    paterno: [,[Validators.required,Validators.minLength(3)]],
    materno: [,[Validators.minLength(3)]],
    fechaNacimiento: [,[Validators.required]],
    email: [,[Validators.required,Validators.minLength(3),Validators.email]],
    telefonoCasa: [,[Validators.minLength(10),Validators.maxLength(10)]],
    celular: [,[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
    telefonoEmergencia: [,[Validators.required, Validators.minLength(10),Validators.maxLength(10)]],
    sexo : [, [Validators.required]],
    curp : [, [Validators.required]],
    idLugarNacimiento : [, [Validators.required]],
    lugarNacimiento: [],
    isNacional: [,[Validators.required]]
  }) as PersonaFormGroup;

  haveErrors(controlName:string):boolean{
     return (this.personaFG.get(controlName).errors != null)?true:false;
  }



}
