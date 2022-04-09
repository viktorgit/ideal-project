import { InjectionToken, Provider } from "@angular/core";
import { Observable, of } from "rxjs";
import { DataTableService } from "./data-table.service";
import { IRow, TableRow } from "./types";

export const TABLE_DATA = new InjectionToken<Observable<any>>(
    'A stream with table data',
 );
 
 export const TABLE_COLUMNS = new InjectionToken<Observable<any>>(
    'A stream with table columns',
 );
 
 export const TABLE_PROVIDERS: Provider[] = [
    {
        provide: TABLE_DATA,
        deps: [DataTableService],
        useFactory: tableDataFactory,
    },
    {
        provide: TABLE_COLUMNS,
        deps: [DataTableService],
        useFactory: tableColumnsFactory,
    }
 ];

 export function sortRowByColumns(row: TableRow, columns: string[]): string[] {
    return columns.map(col => {
        return row[col].toString();
    });
 }
 
 export function tableDataFactory(
    dataTableService: DataTableService,
 ): Observable<IRow[]> {
     const columns = dataTableService.getColumns();
     const data = dataTableService.getTableData();
     const resultData = data.map((row, i) => {
        return {
           id: i,
           rowData: sortRowByColumns(row, columns)
        }
     });
     return of(resultData);
 }

 export function tableColumnsFactory(
    dataTableService: DataTableService,
 ): Observable<string[]> {
    return of(dataTableService.getColumns());
 }