import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DataTableComponent } from './data-table.component';
import { TABLE_PROVIDERS } from './data-table.providers';

@NgModule({
  imports: [CommonModule],
  declarations: [DataTableComponent],
  providers: [...TABLE_PROVIDERS],
  exports: [DataTableComponent]
})
export class DataTableModule { }
