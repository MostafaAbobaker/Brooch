import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  asideToggle: boolean = false

  @Output() showAsidebar:EventEmitter<boolean> = new EventEmitter ()

  ToggleAside() {
    this.asideToggle = !this.asideToggle;
    this.showAsidebar.emit(this.asideToggle);

  }
}
