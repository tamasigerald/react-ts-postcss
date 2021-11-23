import { FC } from 'react';
import { BrowserRouter, Navigate, Routes as RouterRoutes, Route } from 'react-router-dom';

import App from '@/App';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';

const Routes: FC = () => {
    return (
        <BrowserRouter>
            <RouterRoutes>
                <Route path="/" element={<App />}>
                    <Route index element={<HomePage />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Route>
            </RouterRoutes>
        </BrowserRouter>
    );
};

export default Routes;
