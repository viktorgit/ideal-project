import { NgModule } from '@angular/core';
import { EmailFormComponent } from './email-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextFieldModule } from '@angular/cdk/text-field';
import { NgxMaskModule } from 'ngx-mask'
import { NgxsFormPluginModule } from '@ngxs/form-plugin';

@NgModule({
  declarations: [
    EmailFormComponent
  ],
  imports: [
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    TextFieldModule,
    NgxMaskModule.forRoot(),
    NgxsFormPluginModule
  ],
  exports: [
    EmailFormComponent
  ]
})
export class EmailFormModule { }
