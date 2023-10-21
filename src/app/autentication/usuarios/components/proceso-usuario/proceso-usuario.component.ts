import { Items } from './../../../../shared/models/basic/items.interface';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';
import { ModuleType } from 'src/app/shared/enum/module-type.enum';
import { Cancel } from 'src/app/shared/models/basic/cancel.interface';
import { ManageStepService } from 'src/app/shared/services/manageStep.service';

@Component({
  selector: 'app-proceso-usuario',
  templateUrl: './proceso-usuario.component.html',
  styleUrls: ['./proceso-usuario.component.scss']
})
export class ProcesoUsuarioComponent implements OnInit, OnDestroy {

  items: MenuItem[] = [];
  activeIndex: number = 0;
  manageStepService$: Subscription;
  ngOnInit(): void {
    this.items = [
      {
        label: 'Nueva Persona',
        command: (event: any) => {
          this.activeIndex = 0;
        }
      }
    ];
    let itemsData:Items[] = [{modulo: ModuleType.usuario,items:this.items}];
    this.manageStepService.setItems(itemsData);



  }
  ngOnDestroy(): void {
     this.manageStepService$.unsubscribe();
  }

  constructor(
    private manageStepService: ManageStepService
  ){

  }




}
