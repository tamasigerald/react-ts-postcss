import { createContext, FC, useEffect, useReducer, useRef } from 'react';
import { Outlet } from 'react-router';

import Reducer from './reducer';
import { GlobalContextType, GlobalStateType } from './types';

import Layout from '@/components/Layout';

const initialState: GlobalStateType = {
    theme: 'light',
    persistanceMode: 'session',
};

const initializeState = (): GlobalStateType => {
    if (typeof Storage === 'undefined') {
        throw new Error('You need to enable Storage to run this app.');
    }

    const fromLocalStorage = JSON.parse(localStorage.getItem('globalState') as string);
    const fromSessionStorage = JSON.parse(sessionStorage.getItem('globalState') as string);
    return fromSessionStorage || fromLocalStorage || initialState;
};

export const GlobalContext = createContext({} as GlobalContextType);

const GlobalProvider: FC = () => {
    const [globalState, dispatch] = useReducer(Reducer, initializeState());
    const initialRenderGlobalState = useRef(true);
    const initialRenderPersistenceMode = useRef(true);

    useEffect(() => {
        if (initialRenderGlobalState.current) {
            initialRenderGlobalState.current = false;
            return;
        }
        const getPersistenceMode = globalState.persistanceMode;
        if (getPersistenceMode === 'session') {
            sessionStorage.setItem('globalState', JSON.stringify(globalState));
        } else if (getPersistenceMode === 'local') {
            localStorage.setItem('globalState', JSON.stringify(globalState));
        }
    }, [globalState]);

    useEffect(() => {
        if (initialRenderPersistenceMode.current) {
            initialRenderPersistenceMode.current = false;
            return;
        }
        const getPersistenceMode = globalState.persistanceMode;
        if (getPersistenceMode === 'session') {
            localStorage.removeItem('globalState');
        } else if (getPersistenceMode === 'local') {
            sessionStorage.removeItem('globalState');
        }
    }, [globalState.persistanceMode]);

    return (
        <GlobalContext.Provider value={{ globalState, dispatch }}>
            <Layout>
                <Outlet />
            </Layout>
        </GlobalContext.Provider>
    );
};

export default GlobalProvider;
