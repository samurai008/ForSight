import { Input, Directive, ElementRef, OnInit } from '@angular/core';

/**
 * Generated class for the HideDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[hide]' // Attribute selector
})
export class HideDirective implements OnInit {
  @Input('hide') isHidden;

  constructor(
    private el: ElementRef
  ) {
    console.log('Hello HideDirective Directive');
  }

  ngOnInit() {
    if (this.isHidden) {
      this.el.nativeElement.style.display = 'none';
    }
  }

}
