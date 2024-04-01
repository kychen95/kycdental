import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => ({
	// base: "/kycdental/",
	server: {
		host: "192.168.165.219",
	},
	// resolve: {
	// 	alias: {
	// 		$lib: mode === "production" ? "/" : "/src/lib/images",
	// 	},
	// 	// alias: {
	// 	// 	$lib: "./static/portfolio",
	// 	// },
	// },
	plugins: [sveltekit()]
}));
