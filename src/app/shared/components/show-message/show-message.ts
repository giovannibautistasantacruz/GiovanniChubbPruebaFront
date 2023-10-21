import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { MessageType } from '../../enum/message-type.enum';
@Component({
  selector: 'show-message',
  template: ''
})
export class ShowMessageComponent {

  constructor(private messageService: MessageService) {}


  showMessage(key:string,severity:MessageType,title:string,contentMessage:string) {
		console.log("Show Message");
		this.messageService.add({key:key,severity : severity, summary: title, detail: contentMessage});
	  }



}
