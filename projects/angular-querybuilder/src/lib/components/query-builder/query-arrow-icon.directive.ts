import { Directive, TemplateRef } from '@angular/core';

@Directive({selector: '[qQueryArrowIcon]'})
export class QueryArrowIconDirective {
  constructor(public template: TemplateRef<any>) {}
}
