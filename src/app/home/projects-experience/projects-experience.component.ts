import { Component } from '@angular/core';
import { ModalService } from 'src/app/shared/modal.service';

@Component({
  selector: 'app-projects-experience',
  templateUrl: './projects-experience.component.html',
  styleUrls: ['./projects-experience.component.css']
})
export class ProjectsExperienceComponent {
  bodyText = 'This text can be updated in modal 1';

  constructor(protected modalService: ModalService) { }
}
