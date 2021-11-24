import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';
import tsConfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
    return {
        plugins: [
            react(),
            tsConfigPaths(),
            svgrPlugin({
                svgrOptions: {
                    icon: true,
                    expandProps: true,
                    titleProp: true,
                },
            }),
        ],
        define: {
            'process.env': JSON.stringify(process.env),
        },
    };
});
