import { Injectable, OnDestroy, inject } from '@angular/core';
import { Auth, User, authState, idToken, user } from '@angular/fire/auth';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { BehaviorSubject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

// 3 helpful oservables to keep track of user authstate and idToken
export class AuthenticationService implements OnDestroy {
  private auth: Auth = inject(Auth);

  user$ = user(this.auth);
  authState$ = authState(this.auth);
  idToken$ = idToken(this.auth);

  // userSubscription: Subscription
  authStateSubscription: Subscription;
  authState: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  // idTokenSubscription: Subscription;

  constructor() {
    // this.userSubscription = this.user$.subscribe((aUser: User | null) => {
    //   //handle user state changes here. Note, that user will be null if there is no currently logged in user.
    //   console.log(aUser);
    // })

    this.authStateSubscription = this.authState$.subscribe((aUser: User | null) => {
      //handle auth state changes here. Note, that user will be null if there is no currently logged in user.
      // console.log(aUser);
      this.authState.next(aUser);

    })

    // this.idTokenSubscription = this.idToken$.subscribe((token: string | null) => {
    //   //handle idToken changes here. Note, that user will be null if there is no currently logged in user.
    //   console.log(token);
    // })
  }

  // sign in
  SignIn(email: string, password: string) {
    signInWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        // signed in
        const user = userCredential.user;
        console.log('signed in', user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
      });
  }

  ngOnDestroy() {
    // when manually subscribing to an observable remember to unsubscribe in ngOnDestroy
    // this.userSubscription.unsubscribe();

    // when manually subscribing to an observable remember to unsubscribe in ngOnDestroy
    this.authStateSubscription.unsubscribe();

    // when manually subscribing to an observable remember to unsubscribe in ngOnDestroy
    // this.idTokenSubscription.unsubscribe();
  }
}
