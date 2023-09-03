import { Component, OnInit, inject } from '@angular/core';
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
  styleUrls: ['./articles.component.css']
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
      this.articleItems = items
      console.log(items)
    })
  }
}
