import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { ModalService } from 'src/app/shared/modal.service';
import { ScrollResizeService } from 'src/app/shared/scroll-resize.service';

@Component({
  selector: 'app-projects-experience',
  templateUrl: './projects-experience.component.html',
  styleUrls: ['./projects-experience.component.css']
})
export class ProjectsExperienceComponent implements OnInit, AfterViewInit {

  // @ViewChild('mainContainer', { static: false })
  // mainContainer!: ElementRef;
  @ViewChild('header', { static: false })
  header!: ElementRef;
  @ViewChild('projectLinks', { static: false })
  projectLinks!: ElementRef;

  bodyText = 'This text can be updated in modal 1';



  faStar = faStar
  faChevronLeft = faChevronLeft
  faChevronRight = faChevronRight

  item: any = {
    cardClasses: ['card']
  }

  subCompHeight = 0;
  subCompHeightSubscription!: Subscription

  constructor(protected modalService: ModalService,
    private scrollResizeService: ScrollResizeService) {

  }

  getMainHeight() {
    console.log(`calc(${this.scrollResizeService.pageContainerMaxHeight} - ${this.subCompHeight}px)`)
    return {

      maxHeight: `calc(${this.scrollResizeService.pageContainerMaxHeight} - ${this.subCompHeight}px)`
    }
  }

  ngAfterViewInit(): void {

    this.subCompHeightSubscription = this.scrollResizeService.getsubCompHeight([this.header, this.projectLinks])
      .subscribe(height => {
        // console.log(height)
        this.subCompHeight = height
        this.getMainHeight();
      });
  }


  ngOnInit(): void { }

  ngOnDestroy() {
    this.subCompHeightSubscription.unsubscribe()
  }
}
