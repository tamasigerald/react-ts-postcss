import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
    return {
        plugins: [
            react(),
            svgrPlugin({
                svgrOptions: {
                    icon: true,
                    expandProps: true,
                    titleProp: true,
                },
            }),
        ],
    };
});
