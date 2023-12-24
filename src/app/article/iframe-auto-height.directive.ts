import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Directive({
  selector: '[appIframeAutoHeight]'
})
export class IframeAutoHeightDirective implements OnInit {

  private el: any;
  private renderer: Renderer2;
  private prevHeight!: number;
  private sameCount!: number;

  constructor(_elementRef: ElementRef, _renderer: Renderer2) {
    this.el = _elementRef.nativeElement;
    this.renderer = _renderer;
  }

  ngOnInit() {
    const self = this;
    if (this.el.tagName === "IFRAME") {
      this.renderer.listen(this.el, "load", () => {
        self.prevHeight = 0;
        self.sameCount = 0;
        setTimeout(() => {
          self.setHeight();
        }, 50);
      });
    }
  }

  setHeight() {
    const self = this;
    if (this.el.contentWindow.document.body.scrollHeight !== this.prevHeight) {
      this.sameCount = 0;
      this.prevHeight = this.el.contentWindow.document.body.scrollHeight;
      this.renderer.setStyle(
        self.el,
        "height",
        this.el.contentWindow.document.body.scrollHeight + "px"
      );
      setTimeout(() => {
        self.setHeight();
      }, 50);

    } else {
      this.sameCount++;
      if (this.sameCount < 2) {
        setTimeout(() => {
          self.setHeight();
        }, 50);
      }
    }
  }
}

