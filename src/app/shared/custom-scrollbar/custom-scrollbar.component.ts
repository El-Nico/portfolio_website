import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-custom-scrollbar',
  templateUrl: './custom-scrollbar.component.html',
  styleUrls: ['./custom-scrollbar.component.css']
})
export class CustomScrollbarComponent implements AfterViewInit {
  @ViewChild('scrollTrack')
  scrollTrack!: ElementRef;

  @ViewChild('scrollThumb')
  scrollThumb!: ElementRef;

  @Output() scrollEvent = new EventEmitter<number>();


  moved(event: any) {
    const scrollPercentage = this.calculateScrollPercentage()
    this.scrollEvent.emit(scrollPercentage)
  }

  calculateScrollPercentage(): number {
    const trackRect = this.scrollTrack.nativeElement.getBoundingClientRect()
    const thumbRect = this.scrollThumb.nativeElement.getBoundingClientRect()

    let relativeThumbTop = thumbRect.top - trackRect.top
    const relativeTrackLength = trackRect.height - thumbRect.height

    if (relativeThumbTop <= 1) {
      relativeThumbTop = 1

      let scrollPercentage = Math.round((relativeThumbTop / relativeTrackLength) * 100)
      // console.log('o case', relativeThumbTop, relativeTrackLength, scrollPercentage)
      return scrollPercentage
    }

    let scrollPercentage = Math.round((relativeThumbTop / relativeTrackLength) * 100)
    // console.log('normal case', relativeThumbTop, relativeTrackLength, scrollPercentage)
    return scrollPercentage

  }

  ngAfterViewInit(): void {
    const trackRect = this.scrollTrack.nativeElement.getBoundingClientRect()
    const thumbRect = this.scrollThumb.nativeElement.getBoundingClientRect()
    const relativeRect = thumbRect.top - trackRect.top
  }
}
