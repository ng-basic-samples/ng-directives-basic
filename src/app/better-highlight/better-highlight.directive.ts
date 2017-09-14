import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultColor: string = 'transparent';
  @Input('appBetterHighlight') highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.backgroundColor = this.defaultColor;
  }

  ngOnInit(): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseenter')
  mouseOver(eventData: Event) {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave')
  mouseleave(eventData: Event) {
    this.backgroundColor =this.defaultColor;
  }

}
