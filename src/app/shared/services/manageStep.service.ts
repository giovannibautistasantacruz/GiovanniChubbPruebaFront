import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Items } from '../models/basic/items.interface';
import { Cancel } from '../models/basic/cancel.interface';


@Injectable({
  providedIn: 'root'
})
export class ManageStepService {

  items = new BehaviorSubject<Items[]>([]);
  cancel = new BehaviorSubject<Cancel[]>([]);
  constructor() { }



  setItems(dataItems: Items[]) {
    this.items.next(dataItems);
  }

  getItems() {
    return this.items.asObservable();
  }

  setcancel(cancel: Cancel[]) {
    this.cancel.next(cancel);
  }

  getcancel() {
    return this.cancel.asObservable();
  }
}
