import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  minimizeScreen:boolean = false;


  ToggleAside(e:boolean) {
    this.minimizeScreen = e;
    console.log(e);
  }
}
