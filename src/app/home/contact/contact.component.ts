import { Component, inject } from '@angular/core';
import { Firestore, collection } from '@angular/fire/firestore';
import { FormBuilder, Validators } from '@angular/forms';
import AOS from "aos";
import { CollectionReference, DocumentReference, addDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { Message } from 'src/app/models/models';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css', './contact-responsive.css']
})

// ^[^\s]+([\+\(\s.\-\/\d\)]{5,30})+[^\s]$ no whitespace beg or end
export class ContactComponent {

  private firestore: Firestore = inject(Firestore);
  messagesCollection: CollectionReference;

  
  isSubmitted = false;
  sending=false;
  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    subject: [''],
    phone: ['', Validators.pattern(/^[\+\(\s.\-\/\d\)]{5,30}$/)],
    message: ['', Validators.required]
  })
  constructor(private fb: FormBuilder) { 
    this.messagesCollection = collection(this.firestore, 'messages')
    AOS.init();
  }

  addMessage(message:Message){
  return addDoc(this.messagesCollection, <Message> message)
  }

  checkInvalid(formControl: string): boolean {
    //this is more error specific and can provide targeted error message to span
    // return (this.contactForm.get(formControl)?.hasError('required') &&
    return ((this.contactForm.get(formControl)?.invalid && 
          ((this.contactForm.get(formControl)?.dirty || this.contactForm.get(formControl)?.touched) || this.isSubmitted)) 
    || false)
  }

  onSubmit() {
    this.isSubmitted = true
    if(!this.contactForm.valid){
      // alert('invalid field in form, pls check again')
      return
    }
    const message=this.contactForm.value as Message
  this.sending=true;
    this.addMessage(message).then((documentReference:DocumentReference)=>{

this.sending=false;
this.isSubmitted=false;
this.contactForm.reset();
alert('message sent, thanks!')
    })
  }
}
