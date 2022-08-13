import { defineConfig } from 'vite'
import path from 'node:path';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
	resolve: {
		alias: {
			'@Layouts': path.resolve(__dirname, './src/Layouts'),
			'@Components': path.resolve(__dirname, './src/Components'),
			'@Contexts': path.resolve(__dirname, './src/Contexts'),
			'@Styles': path.resolve(__dirname, './src/Styles'),
			'@Pages': path.resolve(__dirname, './src/Pages'),
			'@Services': path.resolve(__dirname, './src/Services'),
		}
	},
	css: {
		modules: {
			localsConvention: 'camelCase'
		}
	}
})
