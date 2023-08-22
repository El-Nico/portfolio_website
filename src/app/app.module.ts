import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { ArticleComponent } from './article/article.component';
import { SharedModule } from './shared/shared.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';


@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    WelcomeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HomeModule,
    SharedModule,
    FontAwesomeModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
