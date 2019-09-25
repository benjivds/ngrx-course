import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  Action
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { routerReducer } from '@ngrx/router-store';
import { state } from '@angular/animations';

export interface AppState {

}

export const reducers: ActionReducerMap<AppState> = {
    router: routerReducer
};

// action before all other reducers
export function logger(reducer: ActionReducer<any>): ActionReducer<any>{
  return (state, action) => {
    console.log("state before: ", state);
    console.log("action: ", action);
    // continuing the flow of reducers passing to the reducers the current
    // state and action so it will flow normally
    return reducer(state, action);
  }
}

export const metaReducers: MetaReducer<AppState>[] =
!environment.production ? [logger] : [];
