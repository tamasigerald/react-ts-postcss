import { createContext, FC, useEffect, useReducer, useRef, useState } from 'react';
import Reducer from './reducer';
import { ActionType, GlobalContextType, GlobalStateType } from './types';

const initialState: GlobalStateType = {
    theme: 'light',
    persistanceType: 'session',
};

const initializeState = () => {
    if (typeof Storage !== 'undefined') {
    } else {
        throw new Error('You need to enable Storage to run this app.');
    }

    const fromLocalStorage = JSON.parse(localStorage.getItem('globalState') as string);
    const fromSessionStorage = JSON.parse(sessionStorage.getItem('globalState') as string);
    return fromSessionStorage || fromLocalStorage || initialState;
};

export const GlobalContext = createContext({} as GlobalContextType);

const GlobalProvider: FC = ({ children }) => {
    const [globalState, dispatch] = useReducer<(state: GlobalStateType, action: ActionType) => any>(Reducer, initializeState());
    const initialRenderGlobalState = useRef(true);
    const initialRenderPersistenceType = useRef(true);

    useEffect(() => {
        if (initialRenderGlobalState.current) {
            initialRenderGlobalState.current = false;
            return;
        }
        const getPersistenceType = globalState.persistenceType;
        if (getPersistenceType === 'sessionStorage') {
            sessionStorage.setItem('globalState', JSON.stringify(globalState));
        } else if (getPersistenceType === 'localStorage') {
            localStorage.setItem('globalState', JSON.stringify(globalState));
        }
    }, [globalState]);

    useEffect(() => {
        if (initialRenderPersistenceType.current) {
            initialRenderPersistenceType.current = false;
            return;
        }
        const getPersistenceType = globalState.persistenceType;
        if (getPersistenceType === 'sessionStorage') {
            localStorage.removeItem('globalState');
        } else if (getPersistenceType === 'localStorage') {
            sessionStorage.removeItem('globalState');
        }
    }, [globalState.persistenceType]);

    return <GlobalContext.Provider value={{ globalState, dispatch }}>{children}</GlobalContext.Provider>;
};

export default GlobalProvider;
