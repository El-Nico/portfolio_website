import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalComponent } from './modal/modal.component';
import { CustomScrollbarComponent } from './custom-scrollbar/custom-scrollbar.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatTooltipModule } from '@angular/material/tooltip';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ModalComponent,
    CustomScrollbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    DragDropModule,
    MatTooltipModule,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    ModalComponent,
    CustomScrollbarComponent
  ]

})
export class SharedModule { }
