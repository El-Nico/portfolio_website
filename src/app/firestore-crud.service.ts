import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/compat/firestore';


message: AngularFirestoreDocument<any>;
@Injectable({
  providedIn: 'root'
})
export class FirestoreCrudService {
  private dbPath = '/messages';

  // messagesRef: AngularFirestoreCollection
  constructor(private db: AngularFirestore) {

   }

}
