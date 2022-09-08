import {Directive, ElementRef, Input, OnDestroy, OnInit} from '@angular/core';

@Directive({
  selector: '[NTGAnimation]'
})
export class AnimationDirective implements OnInit, OnDestroy {

  constructor(private _elm: ElementRef) {
  }

  @Input()
  NTGAnimation = true;

  IsClassAdded = false;
  IntervalID: any = 0;

  ngOnInit(): void {

    this._elm.nativeElement.classList.add('animate__animated');

    this.IntervalID = setInterval(() => {
      if (this.NTGAnimation) {
        if (this.IsClassAdded) {
          this._elm.nativeElement.classList.remove('animate__flash');
          this.IsClassAdded = false;
        } else {
          this._elm.nativeElement.classList.add('animate__flash');
          this.IsClassAdded = true;
        }
      }

    }, 2000);


  }

  ngOnDestroy(): void {

    clearInterval(this.IntervalID);

  }

}
