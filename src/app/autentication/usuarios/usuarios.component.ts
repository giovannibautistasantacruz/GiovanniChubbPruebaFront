import { Component, OnDestroy, OnInit } from '@angular/core';
import {  PersonaService } from './services/persona.service';
import { Persona } from './models/basic/persona.interface';
import { Subscription } from 'rxjs';
import { ManageStepService } from 'src/app/shared/services/manageStep.service';
import { Cancel } from 'src/app/shared/models/basic/cancel.interface';
import { ModuleType } from 'src/app/shared/enum/module-type.enum';
import { ComunicationService } from 'src/app/shared/services/comunication.service';
import { ActionType } from 'src/app/shared/enum/action-type.enum';
import { ResponseAPI } from 'src/app/shared/models/basic/responseapi.Interface';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit, OnDestroy {

  public listadoPersonas: Persona[] = [];
  public loading: boolean = true;
  public selectPersona = {} as Persona;
  public showUsuarioSteps: boolean = false;
  public visibleModalEliminar: boolean;
  public visibleModalRolUsuario: boolean;


  manageStepService$: Subscription;
  dpc$: Subscription;
  ngOnInit(): void {
    this.GetPersonas();
    let cancel: Cancel[] = [{ modulo: ModuleType.usuario, cancel: true }];
    this.manageStepService.setcancel(cancel);
    this.manageStepService$ = this.manageStepService.getcancel().subscribe({
      next: (cancel: Cancel[]) => {
        this.showUsuarioSteps = (cancel.filter(f => f.modulo == ModuleType.usuario)[0].cancel) ? false : true;
        if(!this.showUsuarioSteps){
          this.GetPersonas;
        }
        console.log("cancel", this.showUsuarioSteps);
      }
    });

  }
  ngOnDestroy(): void {
    this.showUsuarioSteps = false;
    this.manageStepService$.unsubscribe();
  }
  constructor(
    private serviceUser: PersonaService,
    private manageStepService: ManageStepService,
    private dpc: ComunicationService) {
    let cancel: Cancel[] = [{ modulo: ModuleType.usuario, cancel: false }];
    this.manageStepService.setcancel(cancel);
  }

  public GetPersonas() {
console.log("getpersonas");
    this.serviceUser.GetPersonas().
      subscribe((d: Persona[]) => {
        this.listadoPersonas = d;
        this.loading = false;
        console.log("listadoPersonas", this.listadoPersonas);
      });
  }

  //ngprime Datatable events
  onRowSelect(usuarioSeleccionado: any) {
    console.log("Selected", usuarioSeleccionado.data);
    this.selectPersona = usuarioSeleccionado.data;
  }

  onRowUnselect(event: any) {
    console.log("UnSelected", event);
    this.selectPersona = { } as Persona
  }

  //funcionamiento botones
  inscribirUsuario() {
    this.showUsuarioSteps = true;
    this.dpc.setAccion(ActionType.nuevo);
  }

  // abrir modal
  modalVisible(modal: string) {
    if(modal == "eliminar"){
      this.visibleModalEliminar = true;
    } else if(modal == "rol"){
      this.visibleModalRolUsuario = true;
    }
  }

eliminarPersona(){
  this.loading=true;
  this.serviceUser.DeletePersona(this.selectPersona.idPersona).
        subscribe({
          next: (res: ResponseAPI) => {

            this.loading = false;


          },
          error: (err) => {
            //console.log("error en login",err.error);
            this.loading=false

          }
        });
}

}
