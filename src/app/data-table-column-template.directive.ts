import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[data-table-column-template]'
})
export class DataTableColumnTemplateDirective {
  constructor(public template: TemplateRef<any>) {}
}
