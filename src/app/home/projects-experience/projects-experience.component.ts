import { Component, OnInit, inject } from '@angular/core';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';
import { Observable } from 'rxjs';
import Swiper, { Autoplay, Navigation, Pagination, Virtual } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, Virtual]);

// interface Project {
//   title: string
//   desc: string
// }

@Component({
  selector: 'app-projects-experience',
  templateUrl: './projects-experience.component.html',
  styleUrls: ['./projects-experience.component.css']
})
export class ProjectsExperienceComponent implements OnInit {

  projects$: Observable<any[]>
  projects: any[] = [];
  firestore: Firestore = inject(Firestore);

  loadingProjects = true;

  breakpoints = {
    1200: {
      slidesPerView: 4
    },
    992: {
      slidesPerView: 3
    },
    640: {
      slidesPerView: 2
    },
    480: {
      slidesPerView: 1
    },
    300: {
      slidesPerView: 1
    }
  }



  constructor(
  ) {
    const projectsCollection = collection(this.firestore, 'projects')
    this.projects$ = collectionData(projectsCollection)
  }

  ngOnInit(): void {
    this.projects$.subscribe(projects => {
      this.projects = projects.sort((a, b) => {
        return a.rank - b.rank
      })
      this.loadingProjects = false
    })
  }

  ngOnDestroy() {
    // this.subCompHeightSubscription.unsubscribe()
  }
}
