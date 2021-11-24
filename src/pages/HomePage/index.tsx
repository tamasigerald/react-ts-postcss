import { Actions } from '@/contexts/GlobalContext/types';
import useGlobalContext from '@/hooks/useGlobalContext';
import { FC, useContext, useEffect } from 'react';
import Layout from '../../components/Layout';

const HomePage: FC = () => {
    const { dispatch } = useGlobalContext();
    return (
        <Layout>
            <button
                onClick={() => {
                    dispatch({ type: Actions.SET_THEME, payload: 'light' });
                }}
            >
                light
            </button>
            <button
                onClick={() => {
                    dispatch({ type: Actions.SET_THEME, payload: 'dark' });
                }}
            >
                dark
            </button>
            <button
                onClick={() => {
                    dispatch({ type: Actions.SET_THEME, payload: 'goaigua' });
                }}
            >
                goaigua
            </button>
        </Layout>
    );
};

export default HomePage;
