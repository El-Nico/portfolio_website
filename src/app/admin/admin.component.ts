import { Component, inject } from '@angular/core';
import { AuthenticationService } from '../shared/authentication.service';
import { FormBuilder, Validators } from '@angular/forms';
// import { Auth } from '@angular/fire/auth';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {


  // private auth: Auth = inject(Auth);

  isSubmitted = false;
  loginForm = this.fb.group({
    email: ['nicholasc1665@yahoo.com', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  })

  constructor(
    private fb: FormBuilder,
    private authentication: AuthenticationService
  ) { }

  onSubmit() {
    const emailF = this.loginForm.get('email')?.value
    const passF = this.loginForm.get('password')?.value

    let email = '', pass = ''
    if (emailF) { email = emailF }
    if (passF) { pass = passF }
    this.authentication.SignIn(email, pass)
  }
}
