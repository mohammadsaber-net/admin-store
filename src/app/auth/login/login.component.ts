import { Component, Output, EventEmitter, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @Output() active: EventEmitter<any> = new EventEmitter()
  router = inject(Router)
  loginform: FormGroup = new FormGroup({
    email: new FormControl(null,
      [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[a-zA-Z]{3,5}[1-9]{3,5}$/),
      Validators.maxLength(10)
    ])
  }
  )
  check() {
    if (this.loginform.valid) {
      localStorage.setItem("useradmin", JSON.stringify({
        email: this.loginform.value.email,
        password: this.loginform.value.password
      }))
      this.router.navigate(["/products"])
      this.active.emit(true)
    }
  }
}
