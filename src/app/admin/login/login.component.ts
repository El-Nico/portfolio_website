import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { AuthenticationService } from 'src/app/shared/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
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
    this.authentication.SignIn(email, pass).then((userCredential) => {
      // signed in
      const user = userCredential.user;
      // alert('signed in successfully' + user)
      alert('signed in successfully')
    })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`login failed, errorcode: ${errorCode}, errormessage: ${errorMessage}`)
      });
  }
}
