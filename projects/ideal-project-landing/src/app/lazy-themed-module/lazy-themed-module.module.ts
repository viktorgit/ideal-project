import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LasyThemedModuleComponent } from './lazy-themed-module.component';

export const LAZY_COMPONENTS = [LasyThemedModuleComponent];

@NgModule({
  declarations: [...LAZY_COMPONENTS],
  imports: [
  ],
  providers: []
})
export class LazyThemedModule { }
