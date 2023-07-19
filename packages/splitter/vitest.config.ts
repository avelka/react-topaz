/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
	plugins: [react()],
	test: {
		globals: true,
		environment: 'jsdom',
		// https://github.com/vitest-dev/vitest/issues/1674
		...(process.env.CI && {
			minThreads: 4,
			maxThreads: 4
		})
	}
});