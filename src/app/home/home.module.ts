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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EduCertItemComponent } from './education-certification/edu-cert-item/edu-cert-item.component';
import { ArticleItemComponent } from './articles/article-item/article-item.component';
import { ProjExpItemComponent } from './projects-experience/proj-exp-item/proj-exp-item.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    HeroComponent,
    EducationCertificationComponent,
    ContactComponent,
    ArticlesComponent,
    ProjectsExperienceComponent,
    EduCertItemComponent,
    ArticleItemComponent,
    ProjExpItemComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
