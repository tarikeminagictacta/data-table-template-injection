import { TemplateRef } from '@angular/core';

export interface ColumnDefinition {
  dataProperty: string;
  columnName: string;
  cellTemplate?: TemplateRef<any>;
  isRightAligned?: boolean;
}
