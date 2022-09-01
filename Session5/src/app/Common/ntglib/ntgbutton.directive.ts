import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[NTGHover]'
})
export class NTGButtonDirective implements OnInit {

  @Input()
  ButtonColor = 'Blue';

  @Input()
  NTGHover = 'red';

  constructor(private _element: ElementRef) {
  }

  ngOnInit(): void {
    this._element.nativeElement.style.width = '100%';
    this._element.nativeElement.style.backgroundColor = this.ButtonColor;
    this._element.nativeElement.style.color = 'white';
  }


  @HostListener('mouseenter')
  OnMouseEnter(e: any) {
    this._element.nativeElement.style.backgroundColor = this.NTGHover;
  }

  @HostListener('mouseleave')
  OnMouseExist(e: any) {
    this._element.nativeElement.style.backgroundColor =  this.ButtonColor;
  }

}
