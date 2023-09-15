import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { articleItem } from '../articles.component';
import { FormBuilder } from '@angular/forms';
import { AuthenticationService } from 'src/app/shared/authentication.service';
import { BehaviorSubject, repeat } from 'rxjs';
import { User } from '@angular/fire/auth';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css']
})
export class ArticleItemComponent implements OnInit, OnDestroy {
  @Input() item: any = {
    // item defaults
    categoryClasses: [],
    category: '',
    // imgUrl?: string,
    articleTitle: '',
    articleDesc: '',
    cardClasses: [],
    articleUrl: '',
    // imgDown?: boolean,
  }


  editMode: boolean = false
  isLoggedIn: boolean = false
  isSubmitted = false;
  authStateSubscription: BehaviorSubject<User | null> = this.authService.authState;


  editArticleItemForm = this.fb.group({
    articleTitle: [this.item.articleTitle],
    categoryClasses: [this.item.categoryClasses],
    category: [this.item.category],
    imgUrl: [this.item.imgUrl],
    articleDesc: [this.item.articleDesc],
    cardClasses: [this.item.cardClasses],
    articleUrl: [this.item.articleUrl],
    imgDown: [this.item.imgDown],
  })




  constructor(private fb: FormBuilder,
    private authService: AuthenticationService) { }


  ngOnInit(): void {
    this.authStateSubscription.subscribe(value => {
      this.isLoggedIn = !!value;
    })
  }

  onSubmit() {
    this.isSubmitted = true
    console.log('submitted form', this.editArticleItemForm.value)
  }

  toggleEditMode() {
    this.editMode = !this.editMode
  }

  articleImg() {
    const backImg: string = this.item.imgUrl
    let imgHeight = this.item.cardClasses.includes('span-2') ? '100%' : 'auto'
    return {
      background: `url("${this.item.imgUrl}")`,
      height: imgHeight,
      backgroundSize: '100%',
      backgroundRepeat: 'no-repeat'
    }
  }

  ngOnDestroy(): void {
    this.authStateSubscription.unsubscribe();
  }

}
