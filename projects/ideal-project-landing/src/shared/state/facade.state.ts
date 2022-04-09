import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext, StateToken } from '@ngxs/store';
import { ChangeTheme } from './facade.actions';

export const FACADE_STATE_TOKEN = new StateToken<IFacadeStateModel>('facadeState');

export interface IFacadeStateModel {
    theme: string;
}

@State<IFacadeStateModel>({
    name: FACADE_STATE_TOKEN,
    defaults: {
        theme: 'light-theme',
    }
})
@Injectable()
export class FacadeState {
    @Selector()
    static theme(state: IFacadeStateModel) {
      return state.theme;
    }
    
    @Action(ChangeTheme)
    changeTheme(ctx: StateContext<IFacadeStateModel>, action: ChangeTheme) {
        const state = ctx.getState();
        ctx.setState({
            ...state,
            theme: action.theme
        });
    }
}