import { Injectable } from '@angular/core';
import { Selector, State, StateToken } from '@ngxs/store';

export const EMAIL_FORM_STATE_TOKEN = new StateToken<IEmailFormStateModel>('formState');

export interface IEmailFormStateModel {
    emailForm: IFormStateModel;
}

export interface IFormStateModel {
    model: any;
    dirty: boolean;
    status: string;
    errors: any;
}

@State({
    name: EMAIL_FORM_STATE_TOKEN,
    defaults: {
        emailForm: {
            model: undefined,
            dirty: false,
            status: '',
            errors: {}
        }
    }
})
@Injectable()
export class EmailFormState {
    @Selector()
    static emailForm(state: IEmailFormStateModel) {
      return state.emailForm;
    }
}