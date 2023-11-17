import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import AOS from "aos";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  isSubmitted = false;
  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    subject: [''],
    phone: ['', Validators.pattern("^((\\+353-?)|0)?[0-9]{10}$")],
    message: ['', Validators.required]
  })
  constructor(private fb: FormBuilder) { 
    AOS.init();
  }

  checkInvalid(formControl: string): boolean {
    //this is more error specific and can provide targeted error message to span
    // return (this.contactForm.get(formControl)?.hasError('required') &&
    return (this.contactForm.get(formControl)?.invalid &&
      (this.contactForm.get(formControl)?.dirty ||
        this.contactForm.get(formControl)?.touched) || this.isSubmitted) || false
  }

  onSubmit() {
    this.isSubmitted = true
    console.log('submitted form', this.contactForm.value)
  }
}
