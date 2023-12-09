import { Component, Input } from '@angular/core';
import { faBriefcase, faGraduationCap, faHome, faNewspaper, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css', './navbar-responsive.css']
})
export class NavbarComponent {
  faHome = faHome;
  faUser = faUser;
  faSchool = faGraduationCap;
  faNewspaper = faNewspaper;
  faPhone = faPhone;
  faProject = faBriefcase;
  isDropdownMenuOpen = false;
  @Input() bgMode: string = 'none'

  toggleDropdownMenu(){
    
    this.isDropdownMenuOpen = !this.isDropdownMenuOpen
    console.log(this.isDropdownMenuOpen)
  }
}
