import { Dispatch, ReducerWithoutAction } from 'react';
import Reducer from './reducer';

export type ThemeType = 'light' | 'dark';
export type PersistanceType = 'session' | 'local';

export type GlobalStateType = {
    theme: ThemeType;
    persistanceType: PersistanceType;
};

enum Actions {
    'SET_THEME',
    'GET_THEME',
}

export type ActionType = {
    type: keyof typeof Actions;
    payload?: any;
};

export type GlobalContextType = {
    globalState: GlobalStateType;
    dispatch: Dispatch<ActionType>;
};
