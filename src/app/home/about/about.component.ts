import { Component, OnInit } from '@angular/core';
import AOS from "aos";


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css', './about-responsive.css']
})
export class AboutComponent implements OnInit {

  ngOnInit() {
    AOS.init();
  }
}
