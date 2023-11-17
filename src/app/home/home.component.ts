import { Component } from '@angular/core';

import { faBriefcase, faGraduationCap, faHome, faNewspaper, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  faHome = faHome;
  faUser = faUser;
  faSchool = faGraduationCap;
  faNewspaper = faNewspaper;
  faPhone = faPhone;
  faProject = faBriefcase;

}
