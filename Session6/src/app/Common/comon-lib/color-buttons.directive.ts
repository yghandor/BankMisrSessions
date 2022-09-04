import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[ColorButtons]'
})
export class ColorButtonsDirective implements OnInit{

  @Input()
  ColorButtons : string = 'blue';

  constructor(private _HostComp : ElementRef) { }

  ngOnInit(): void {
  debugger;
    this._HostComp.nativeElement.children[0].style.backgroundColor = this.ColorButtons;

  }

}
