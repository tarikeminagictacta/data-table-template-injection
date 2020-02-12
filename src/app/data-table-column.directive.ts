import { ContentChild, Directive, Input, TemplateRef } from '@angular/core';
import { DataTableColumnTemplateDirective } from './data-table-column-template.directive';

@Directive({
  selector: 'data-table-column'
})
export class DataTableColumnDirective {
  @Input() name: string;

  @ContentChild(DataTableColumnTemplateDirective, { read: TemplateRef, static: true })
  templateDirective: TemplateRef<any>;

  get template(): TemplateRef<any> {
    return this.templateDirective;
  }
}
