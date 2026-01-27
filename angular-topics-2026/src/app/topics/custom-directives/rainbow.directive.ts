import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbow]',
  standalone: true
})
export class RainbowDirective {
  private colors = [
    'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'
  ];
  private currentIndex = 0;

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.transition = 'color 0.3s ease, background-color 0.3s ease';
  }

  @HostListener('click') onClick() {
    this.currentIndex = (this.currentIndex + 1) % this.colors.length;
    const color = this.colors[this.currentIndex];

    if (this.el.nativeElement.tagName === 'BUTTON') {
      this.el.nativeElement.style.backgroundColor = color;
      this.el.nativeElement.style.color = 'white';
    } else {
      this.el.nativeElement.style.color = color;
    }
  }
}