import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { TableRow } from "./types";

@Injectable({
    providedIn: 'root'
})
export class DataTableService {
  constructor() {}

  public getColumns(): string[] {
    return ['name', 'age', 'city'];
  }

  public getTableData(): TableRow[] {
    return [
        {
            name: 'Nikolay',
            city: 'Moscow',
            age: 12
        },
        {
            city: 'Dmitrov',
            age: 130,
            name: 'Vasilii',

        }
    ];
  }
}