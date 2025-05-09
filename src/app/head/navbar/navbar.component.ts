import { Component, EventEmitter, inject, Output } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  router = inject(Router)
  @Output() active: EventEmitter<any> = new EventEmitter()
  logout() {
    if (localStorage.getItem("useradmin")) localStorage.removeItem("useradmin")
    this.router.navigate(["/login"])
  }
}
