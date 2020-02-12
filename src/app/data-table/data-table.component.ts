import {
  Component,
  ContentChild,
  ContentChildren,
  Input,
  OnChanges,
  QueryList
} from '@angular/core';
import { isObservable, Observable } from 'rxjs';
import { DataTableColumnDirective } from '../data-table-column.directive';
import { DataTableLoadingDirective } from '../data-table-loading.directive';
import { ColumnDefinition } from './data-table.models';
import { StringUtils } from './string.utils';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnChanges {
  @Input() data: any[] | Observable<any[]>;
  @Input() striped: boolean;
  @Input() bordered: boolean;
  @Input() columns: ColumnDefinition[];

  @ContentChild(DataTableLoadingDirective, { static: false })
  loadingTemplate: DataTableLoadingDirective;

  @ContentChildren(DataTableColumnDirective)
  columnDirectives: QueryList<DataTableColumnDirective>;

  resolvedData: any[];
  isLoading: boolean;

  constructor() {}

  ngOnChanges(): void {
    this.initialize();
  }

  initialize() {
    if (isObservable<any[]>(this.data)) {
      this.isLoading = true;
      this.data.subscribe(d => {
        this.resolvedData = d;
        this.setupColumns();
        this.isLoading = false;
      });
    } else {
      this.resolvedData = this.data;
      this.setupTable();
    }
  }

  setupTable() {
    this.setupColumns();
  }

  setupColumns() {
    if (!this.columns) {
      const dataKeys = Object.keys(this.resolvedData[0]);
      this.columns = dataKeys.map(x => {
        return {
          dataProperty: x,
          columnName: StringUtils.reverseCamelCase(x)
        };
      });
    }
    this.columns = this.columns.map(x => {
      const columnDirective = this.getColumnTemplate(x.dataProperty);
      x.cellTemplate = columnDirective && columnDirective.template;
      return x;
    });
  }

  getColumnTemplate(name: string) {
    return this.columnDirectives.find(x => x.name === name);
  }
}
