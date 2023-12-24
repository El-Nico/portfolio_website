import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild, ViewEncapsulation, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { faCaretDown, faCaretSquareDown, faCaretSquareUp, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { Observable, Subscription, fromEvent } from 'rxjs';
import { ScrollResizeService } from 'src/app/shared/scroll-resize.service';
import AOS from "aos";

export interface articleItem {
  categoryClasses: string[],
  category: string,
  imgUrl?: string,
  articleTitle: string,
  articleDesc: string,
  imgDown?: boolean,
  cardClasses: string[],
  spanX?: number,
  spanY?: number,
  articleUrl: string,
}

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
})
export class ArticlesComponent implements OnInit, AfterViewInit {
  //manual scroll
  @ViewChild('scrollableDiv')
  private scrollableDiv!: ElementRef;
  // @HostListener('window:scroll', ['$event'])


  @ViewChild('mainContainer', { static: false })
  mainContainer!: ElementRef;
  @ViewChild('header', { static: false })
  header!: ElementRef;
  @ViewChild('pageContainer', { static: false })
  pageContainer!: ElementRef;

  faCaretUp = faCaretSquareUp
  faCaretDown = faCaretSquareDown


  articleItems$: Observable<any[]>;
  articleItems: any[] = [];
  firestore: Firestore = inject(Firestore);

  translateValue = 0;

  subCompHeight = 0;
  subCompHeightSubscription!: Subscription



  constructor(private scrollResizeService: ScrollResizeService) {
    const articleItemCollection = collection(this.firestore, 'articles')
    this.articleItems$ = collectionData(articleItemCollection, { idField: 'id' });


  }

  processScroll(e: any) {
    this.translateValue = e;
    this.translater();
  }

  translater() {
    return {
      transform: `translateY(-${this.translateValue}px)`,
    }
  }

  getMainHeight() {
    // console.log(`calc(${this.scrollResizeService.pageContainerMaxHeight} - ${this.subCompHeight}px)`)
    return {

      maxHeight: `calc(${this.scrollResizeService.pageContainerMaxHeight} - ${this.subCompHeight}px)`
    }
  }
  isSingleSpan(cardItem: any) {
    return !cardItem.cardClasses.includes('span-2') && cardItem.imgUrl;
  }

  scrollUp() {

    this.scrollableDiv.nativeElement.scrollBy({ top: 10, behavior: 'smooth' });
    // console.log(this.scrollableDiv.nativeElement)

  }

  scrollDown() {

    this.scrollableDiv.nativeElement.scrollBy({ top: -10, behavior: 'smooth' });

  }


  ngAfterViewInit(): void {

    this.subCompHeightSubscription = this.scrollResizeService.getsubCompHeight([this.header])
      .subscribe(height => {
        // console.log(height)
        this.subCompHeight = height
        this.getMainHeight();
      });
  }



  ngOnInit(): void {
    AOS.init();
    this.articleItems$.subscribe(items => {
      this.articleItems = items.sort((a, b) => {
        return a.rank - b.rank
      })
      // console.log(this.articleItems)
    })



  }

  ngOnDestroy() {
    this.subCompHeightSubscription.unsubscribe()
  }

}
