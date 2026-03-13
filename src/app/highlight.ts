import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class Highlight {
  @Input() color = '';
  @Input() setColor = '';

  constructor(private el: ElementRef) {}
  @HostListener('mouseenter') onMouseEnter() {
    this.Highlight(this.color || 'Yellow', this.setColor || '');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.Highlight('', '');
  }

  private Highlight(color: any, setColor: any) {
    this.el.nativeElement.style.color = color;
    this.el.nativeElement.style.backgroundColor = setColor;
  }
}
