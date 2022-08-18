import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';
import { defineConfig } from 'vite'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors

	kit: {
		adapter: adapter({
			// default options are shown
			out: 'build',
			precompress: false,
		}),

	}
};

export default config;
