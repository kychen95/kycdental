import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => ({
	// base: "/kycdental/",
	server: {
		host: "172.21.4.141",
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
