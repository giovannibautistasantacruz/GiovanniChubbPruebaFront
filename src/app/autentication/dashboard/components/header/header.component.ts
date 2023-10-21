import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  toggled: any = 1;

  constructor() {}

  ngOnInit(): void { }

  toggle(){
    if(this.toggled){
      document.getElementById('sidenav_js').style.width = '0';
      document.getElementById('main_js').style.marginLeft = '0';
      document.getElementById('main_js').style.width = '100%';
      this.toggled = 0;
    } else {
      document.getElementById('sidenav_js').style.width = '250px';
      document.getElementById('main_js').style.marginLeft = '250px';
      document.getElementById('main_js').style.width = 'calc(100% - 250px)';
      this.toggled = 1;
    }
  }
}
