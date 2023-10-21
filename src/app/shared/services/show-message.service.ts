import { Injectable } from '@angular/core';
import { MessageType } from '../enum/message-type.enum';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ShowMessageService {

  constructor(
    private messageService: MessageService
  ) { }


  showMessage(key:string,severity:MessageType,title:string,contentMessage:string) {
		console.log("Show Message");
		this.messageService.add({key:key,severity : severity, summary: title, detail: contentMessage});
	  }
}
