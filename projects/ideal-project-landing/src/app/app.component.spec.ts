import { TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsModule } from '@ngxs/store';
import { EmailFormState } from 'email-form';
import { environment } from '../environments/environment';
import { FacadeState } from '../shared/state/facade.state';
import { AppComponent } from './app.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatDialogModule,
        NgxsModule.forRoot([FacadeState, EmailFormState], {
          developmentMode: !environment.production
        }),
        NgxsStoragePluginModule.forRoot({
          key: ['formState', 'facadeState']
        }),
        NgxsFormPluginModule.forRoot(),
      ],
      declarations: [
        AppComponent,
        ConfirmDialogComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
