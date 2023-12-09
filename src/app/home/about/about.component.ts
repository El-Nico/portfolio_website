import { Component, OnInit, inject } from '@angular/core';
import { Firestore, docData } from '@angular/fire/firestore';
import AOS from "aos";
import { DocumentData, DocumentReference, collection, doc } from 'firebase/firestore';
import { Observable } from 'rxjs';

interface About {
  imgUrl: string
  template: string
  style: any
  class: any
}
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css', './about-responsive.css']
})
export class AboutComponent implements OnInit {
  firestore: Firestore = inject(Firestore)
  about$: Observable<About>;
  about: About;

  constructor() {
    this.about = { imgUrl: 'https://i.pravatar.cc/300', template: ' <h1>hello world!!</h1>', style: '', class: '' } as About
    const aboutDoc = doc(this.firestore, 'page_data/about')
    this.about$ = docData(aboutDoc) as Observable<About>
  }

  ngOnInit() {
    AOS.init();
    this.about$.subscribe(about => {
      this.about = about
    })
  }
}
