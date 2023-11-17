import { Component, OnInit, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import AOS from "aos";

interface eduCertItem {
  title: string,
  rank: number,
  imgUrl: string,
  tags: string[]
}

@Component({
  selector: 'app-education-certification',
  templateUrl: './education-certification.component.html',
  styleUrls: ['./education-certification.component.css']
})

export class EducationCertificationComponent implements OnInit {
  eduCertItems$: Observable<any[]>;
  eduCertItems: any[] = [];
  firestore: Firestore = inject(Firestore);

  constructor() {
    const itemCollection = collection(this.firestore, 'edu_cert')
    this.eduCertItems$ = collectionData(itemCollection);
  }
  ngOnInit(): void {
    AOS.init();
    this.eduCertItems$.subscribe(items => {
      this.eduCertItems = items
    })
  }
}
