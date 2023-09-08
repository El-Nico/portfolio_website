import { Component, OnInit, ViewEncapsulation, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

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
  // encapsulation: ViewEncapsulation.None
})
export class ArticlesComponent implements OnInit {
  articleItems$: Observable<any[]>;
  articleItems: any[] = [];
  firestore: Firestore = inject(Firestore);

  constructor() {
    const articleItemCollection = collection(this.firestore, 'articles')
    this.articleItems$ = collectionData(articleItemCollection);
  }


  ngOnInit(): void {
    this.articleItems$.subscribe(items => {
      this.articleItems = items.sort((a, b) => {
        return a.rank - b.rank
      })
      console.log(this.articleItems)
    })
  }
}
