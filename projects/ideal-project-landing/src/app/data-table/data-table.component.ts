import { Component, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonTable } from '../common-table/common-table';
import { TABLE_DATA, TABLE_COLUMNS } from './data-table.providers';
import { IRow } from './types';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent extends CommonTable {
  public selectedId: number | null;
  constructor(
    @Inject(TABLE_DATA) readonly tableData$: Observable<IRow[]>,
    @Inject(TABLE_COLUMNS) readonly tableColumns$: Observable<string[]>,
  ) {
    super();
  }

  clickOnRow(row: IRow): void {
    this.selectedId = this.selectedId === row.id ? null : row.id;
  }
}
