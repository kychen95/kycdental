import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	server: {
		host: "192.168.168.158",
	},
	plugins: [sveltekit()]
});
