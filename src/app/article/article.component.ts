import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild, inject } from '@angular/core';
import { Firestore, collectionData, docData } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { collection, doc } from 'firebase/firestore';
import { BehaviorSubject, Observable, Subscription, find, switchMap } from 'rxjs';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css', './article-responsive.css']
})
export class ArticleComponent implements AfterViewInit, OnInit, OnDestroy {

  obtainedFirstHeight = true;
  finalHeight = 150

  firestore: Firestore = inject(Firestore)
  article$!: Observable<any>;
  article = {
    author: 'Nicholas chibuike-eruba', articleTitle: 'loading', date: '240', category: 'ai',
    articleHeight: '700px',
    htmlUrl: 'http://www.example.com/'
  };

  articleSubscription!: Subscription;

  iFrameSrc = 'http://www.example.com'

  @ViewChild('catche') private catche!: ElementRef;
  constructor(private renderer: Renderer2, private route: ActivatedRoute, private router: Router) {
    const articlesCollection = collection(this.firestore, 'articles')
    this.article$ = collectionData(articlesCollection, { idField: 'id' })

    // this.route.paramMap.pipe(
    //   switchMap(params => {
    //     const id = params.get('articleId')
    //     console.log(this.router.url)
    //     // console.log(id)
    //     const articleDoc = doc(this.firestore, `articles/${id}`)
    //     return docData(articleDoc)
    //   })
    // )
  }
  ngOnDestroy(): void {
    this.articleSubscription.unsubscribe();
  }
  ngOnInit(): void {
    this.articleSubscription = this.article$.subscribe(articles => {
      let segment = this.router.url
      // console.log(segment)
      this.article = articles.find((article: { articleUrl: string; }) => article.articleUrl === segment)
      this.iFrameSrc = this.article.htmlUrl || 'http://www.example.com/'
      // console.log(this.article)
    })

    // this.article$.subscribe(article => {
    //   this.article = article
    //   this.iFrameSrc = article.htmlUrl || 'http://www.example.com/'
    //   // console.log(this.article)
    // })
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      // console.log(this.catche.nativeElement)
    }, 5000);
  }
  onLoad(e: any) {
    // console.log(e)
    // console.log(this.catche.nativeElement)
    // console.log(e.target.offsetParent.clientHeight)
    this.finalHeight = e.target.offsetParent.clientHeight
    // this.obtainedFirstHeight = false;
    // src="https://firebasestorage.googleapis.com/v0/b/portfolio-website-v2-2023.appspot.com/o/articles%2Fwhat_are_convolutional_neural_networks%2Fwhat_are_convolutional_neural_networks.htm?alt=media&token=a588034c-24f9-43f7-b9dd-e36230ed08ae"
    // style="position: relative;  width: 100%;"
    // scrolling="auto"
    // frameborder="0"
    // title="what_are_convolutional_neural_networks"
    // (load)="onLoad($event)"
    // (resize)="onLoad($event)"
    // [height]="finalHeight"
    // id="iFrame1"
    const heightString = `${e.target.offsetParent.clientHeight + 10}px`
    // const heightString = `${3000}px`
    // console.log(heightString)
    // this.renderer.setStyle(this.catche.nativeElement, 'height', heightString)
    // const finalIframe = this.renderer.createElement('iFrame');
    // this.renderer.setProperty(finalIframe, 'src', 'https://firebasestorage.googleapis.com/v0/b/portfolio-website-v2-2023.appspot.com/o/articles%2Fwhat_are_convolutional_neural_networks%2Fwhat_are_convolutional_neural_networks.htm?alt=media&token=a588034c-24f9-43f7-b9dd-e36230ed08ae')
    // this.renderer.setProperty(finalIframe, 'style', heightString)
    // this.renderer.setProperty(finalIframe, 'scrolling', 'auto')
    // this.renderer.setProperty(finalIframe, 'frameborder', '0')
    // this.renderer.setProperty(finalIframe, 'title', 'what_are_convolutional_neural_networks')
    // this.renderer.appendChild(this.catche.nativeElement, finalIframe);

    // this.renderer.appendChild(document.body, finalIframe);
  }
}
