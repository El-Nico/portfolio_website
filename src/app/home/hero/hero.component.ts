import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  skill = 'Data Analysis'
  ngOnInit() {
    const expertises = ['Data Analysis', 'Web Development', 'Machine Learning/AI']
    for (const expertise of expertises) {
      let expertiseSpread = [...expertise]
    }

    let n = 7
    for (let i = 0; i <= n; i++) {
      console.log(i * (1 / n))
    }
  }




  easeInCubic(x: number): number {
    return x * x * x;
  }

}