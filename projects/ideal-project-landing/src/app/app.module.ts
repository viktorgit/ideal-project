import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EmailFormModule, EmailFormState } from 'email-form';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { NgxsModule } from '@ngxs/store';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { FacadeState } from '../shared/state/facade.state';
import { DataTableModule } from './data-table/data-table.module';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmailFormModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    DataTableModule,
    NgxsModule.forRoot([FacadeState, EmailFormState], {
      developmentMode: !environment.production
    }),
    NgxsStoragePluginModule.forRoot({
      key: ['formState', 'facadeState']
    }),
    NgxsFormPluginModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
