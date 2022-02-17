import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';
import * as path from 'path';
import { defineConfig } from 'vite'
import { imagetools } from 'vite-imagetools'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors

	kit: {
		adapter: adapter({
			// default options are shown
			out: 'build',
			precompress: false,
			env: {
				host: 'HOST',
				port: 'PORT'
			}
		}),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
        vite: ({
			plugins: [imagetools],
			resolve: {
				alias: {
					$img: path.resolve('src/images'),
					'@sveltejs/site-kit': path.resolve('../../packages/site-kit/src/lib')
				}
			},
		      ssr: {
			external: ['firebase']
		}
	    }),
	    floc: true,
	}
};

export default config;
