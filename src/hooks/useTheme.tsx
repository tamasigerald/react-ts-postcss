import { GlobalStateType } from '@/contexts/GlobalContext/types';
import { useEffect, useState } from 'react';

enum Theme {
    'light' = 'data-theme-light',
    'dark' = 'data-theme-dark',
    'goaigua' = 'data-theme-goaigua',
}

export function useTheme() {
    const [theme, setTheme] = useState<keyof typeof Theme>('dark');

    const setMode = (mode: keyof typeof Theme) => {
        window.localStorage.setItem('theme', mode);
        setTheme(mode);
        document.body.setAttribute(Theme[theme], '');
    };

    useEffect(() => {
        const savedState = window.localStorage.getItem('globalState') || window.sessionStorage.getItem('globalState');
        const parsedState = savedState ? (JSON.parse(savedState) as GlobalStateType) : null;
        parsedState?.theme ? setMode(parsedState.theme) : setMode('dark');
    }, []);

    return { theme };
}
