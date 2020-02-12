import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[data-table-loading]'
})
export class DataTableLoadingDirective {
  constructor(public template: TemplateRef<any>) {}
}
