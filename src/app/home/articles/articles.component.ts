import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { Observable, Subscription, fromEvent } from 'rxjs';

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

  @ViewChild('mainContainer', { static: false })
  mainContainer!: ElementRef;
  @ViewChild('header', { static: false })
  header!: ElementRef;
  @ViewChild('pageContainer', { static: false })
  pageContainer!: ElementRef;

  faCaretUp = faCaretUp
  faCaretDown = faCaretDown


  articleItems$: Observable<any[]>;
  articleItems: any[] = [];
  firestore: Firestore = inject(Firestore);

  translateValue = 0;

  resizeObservable$: Observable<Event>
  resizeSubscription$!: Subscription;
  mainHeight: number = 0;
  headerHeight: number = 0;

  constructor() {
    const articleItemCollection = collection(this.firestore, 'articles')
    this.articleItems$ = collectionData(articleItemCollection);

    this.resizeObservable$ = fromEvent(window, 'resize');
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
    return {
      height: `calc(100vh - 3rem - ${this.headerHeight}px`
    }
  }
  isSingleSpan(cardItem: any) {
    return !cardItem.cardClasses.includes('span-2') && cardItem.imgUrl;
  }

  calculateMainHeight() {
    // console.log(this.pageContainer.nativeElement)
    const pageContainerHeight = this.pageContainer.nativeElement.offsetHeight;
    this.headerHeight = this.header.nativeElement.offsetHeight;
    this.mainHeight = pageContainerHeight - this.headerHeight
    console.log(pageContainerHeight, this.headerHeight, this.mainHeight)
    return this.getMainHeight();
  }

  ngAfterViewInit(): void {
    this.calculateMainHeight();
  }


  ngOnInit(): void {
    this.articleItems$.subscribe(items => {
      this.articleItems = items.sort((a, b) => {
        return a.rank - b.rank
      })
      console.log(this.articleItems)
    })

    this.resizeSubscription$ = this.resizeObservable$.subscribe(evt => {
      console.log('event', evt)
      this.calculateMainHeight()
    })

  }

  ngOnDestroy() {
    this.resizeSubscription$.unsubscribe()
  }

}
