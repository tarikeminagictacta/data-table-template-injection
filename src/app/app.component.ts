import { Component } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ColumnDefinition } from './data-table/data-table.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'data-table';

  columns: ColumnDefinition[] = [
    {
      dataProperty: 'name',
      columnName: 'Name',
      isRightAligned: true
    },
    {
      dataProperty: 'lastName',
      columnName: 'Surname'
    }
  ];

  data = of([
    {
      name: 'some name 1',
      lastName: 'some last name 1',
      age: 13,
      gender: 'male'
    },
    {
      name: 'some name 2',
      lastName: 'some last name 2',
      age: 18,
      gender: 'male'
    },
    {
      name: 'some name 3',
      lastName: 'some last name 3',
      age: 15,
      gender: 'male'
    }
  ]).pipe(delay(2000));

  changeData() {
    this.data = of([
      {
        name: 'Tarik',
        lastName: 'Eminagic',
        age: 15,
        gender: 'male'
      },
      {
        name: 'some name 2',
        lastName: 'some last name 2',
        age: 18,
        gender: 'male'
      },
      {
        name: 'some name 3',
        lastName: 'some last name 3',
        age: 15,
        gender: 'male'
      }
    ]).pipe(delay(2000));
  }
}
