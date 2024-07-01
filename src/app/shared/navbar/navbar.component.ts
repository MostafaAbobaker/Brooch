import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private router: Router) {}
  onLogoutClick(event: Event) {
    event.preventDefault();
    localStorage.removeItem('userToken');
    this.router.navigate(['auth/login']);
  }
  asideToggle: boolean = false
  @Output() showAsidebar:EventEmitter<boolean> = new EventEmitter ()
  ToggleAside() {
    this.asideToggle = !this.asideToggle;
    this.showAsidebar.emit(this.asideToggle);
  }
}
