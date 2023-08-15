import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ArticlesComponent } from './articles/articles.component';
import { ContactComponent } from './contact/contact.component';
import { EducationCertificationComponent } from './education-certification/education-certification.component';
import { HeroComponent } from './hero/hero.component';
import { ProjectsExperienceComponent } from './projects-experience/projects-experience.component';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    HeroComponent,
    EducationCertificationComponent,
    ContactComponent,
    ArticlesComponent,
    ProjectsExperienceComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    SharedModule
  ]
})
export class HomeModule { }
