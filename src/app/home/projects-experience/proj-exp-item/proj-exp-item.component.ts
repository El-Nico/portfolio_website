import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-proj-exp-item',
  templateUrl: './proj-exp-item.component.html',
  styleUrls: ['./proj-exp-item.component.css']
})
export class ProjExpItemComponent implements OnInit {
  @Input() project: any;
  projDest: string = 'https://projects.nicholas-eruba.com/';
  constructor() {

  }
  ngOnInit(): void {
    if (this.project.id === 'project_showcaser') {
      this.projDest = 'https://projects.nicholas-eruba.com/about'
    } else {
      this.projDest = `https://projects.nicholas-eruba.com/home?showcase=${this.project.id}`
    }
  }

  backgroundImageStyle() {
    return `background: url('${this.project.imgUrl}') no-repeat center center fixed; 
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
    `
  }
}
