import { Index } from '../models/basic/index.interface';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Items } from '../models/basic/items.interface';
import { Cancel } from '../models/basic/cancel.interface';


@Injectable({
  providedIn: 'root'
})
export class ManageStepService {

  activeIndex = new BehaviorSubject<Index[]>([]);
  items = new BehaviorSubject<Items[]>([]);
  cancel = new BehaviorSubject<Cancel[]>([]);
  constructor() { }

  setActiveIndex(indexs: Index[]) {
    this.activeIndex.next(indexs);
  }

  getActivesIndex() {
    return this.activeIndex.asObservable();
  }

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
