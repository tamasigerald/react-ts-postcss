import { Dispatch, Reducer as ReducerFromReactTypem, ReducerState, ReducerAction } from 'react';
import Reducer from './reducer';

export type ThemeType = 'light' | 'dark' | 'goaigua';
export type PersistanceType = 'session' | 'local';

export type GlobalStateType = {
    theme: ThemeType;
    persistanceMode: PersistanceType;
};

export enum Actions {
    'SET_THEME' = 'SET_THEME',
    'SET_PERSISTANCE' = 'SET_PERSISTANCE',
}

export type ActionType =
    | {
          type: Actions.SET_THEME;
          payload: ThemeType;
      }
    | { type: Actions.SET_PERSISTANCE; payload: PersistanceType };

export type GlobalContextType = {
    globalState: GlobalStateType;
    dispatch: Dispatch<ActionType>;
};
