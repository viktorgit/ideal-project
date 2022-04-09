import { Compiler, Component, Injector, ViewChild, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Select, Store } from '@ngxs/store';
import { EmailFormState, IFormStateModel } from 'email-form';
import { Observable } from 'rxjs';
import { ChangeTheme } from '../shared/state/facade.actions';
import { IFacadeStateModel, FacadeState } from '../shared/state/facade.state';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { IDialogData } from './confirm-dialog/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef;

  @Select(FacadeState) facadeState$: Observable<IFacadeStateModel>;

  constructor(
    private dialog: MatDialog,
    private compiler: Compiler,
    private injector: Injector,
    private store: Store
  ) {
  }

  lazyLoadModule(event: MouseEvent) {
    (event.target as HTMLElement).remove();
    import('./lazy-themed-module/lazy-themed-module.module').then(({ LazyThemedModule, LAZY_COMPONENTS }) => {
      this.compiler.compileModuleAsync(LazyThemedModule).then(moduleFactory => {
        this.container.createComponent(LAZY_COMPONENTS[0], {
          injector: this.injector,
          ngModuleRef: moduleFactory.create(this.injector)
        });
      });
    });
  }

  onEmailFormSubmit(event: FormGroup) {
    const data: IDialogData = {
      controls: event.controls,
      label: 'Good job! But I dont added backend sevice, so data was not send. But we have good news too - I use ngxs and you dont lose your data! And selected theme was saved too!'
    };

    this.dialog.open(ConfirmDialogComponent, {
      data
    });
  }

  changeTheme() {
    const theme = this.store.selectSnapshot<string>(FacadeState.theme);
    const newTheme = new ChangeTheme(theme === 'dark-theme' ? 'light-theme' : 'dark-theme');
    this.store.dispatch(newTheme);
  }

  myBestSidesDialog() {
    this.dialog.open(ConfirmDialogComponent, {
      data: {
        label: 'My best sides is soft skills, Angular long work experience, RxJs, CSS, native JS'
      }
    });
  }

  notMyBestSidesDialog() {
    this.dialog.open(ConfirmDialogComponent, {
      data: {
        label: 'Not my best sides is schematics and Angular SSR (know this technologies in theory, dont use in production)'
      }
    });
  }
}
