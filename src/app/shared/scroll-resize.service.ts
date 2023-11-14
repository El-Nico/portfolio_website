import { ElementRef, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, fromEvent, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollResizeService {

  // getMainHeight:((pageContainer: ElementRef, subtractors: ElementRef[]) => Subject<number>) | undefined
  pageContainerMaxHeight = '(100vh - 3rem)'
  constructor() { }

  getsubCompHeight(subtractors: ElementRef[]): Observable<number> {
    return fromEvent(window, 'resize').pipe(
      switchMap(() => {
        const totalSubtractorHeight: number = subtractors.reduce((prevTotalHeight, currElement) => {
          const currElementHeight = currElement.nativeElement.offsetHeight
          console.log(currElementHeight);
          return prevTotalHeight += currElementHeight;
        }, 0)
        console.log(totalSubtractorHeight)
        return new BehaviorSubject<number>(totalSubtractorHeight);
      })
    );
  }

}
