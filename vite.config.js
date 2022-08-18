import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from 'vite-imagetools'
import * as path from 'path';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(),
		imagetools],
	resolve: {
		alias: {
			$img: path.resolve('src/images'),
			'@sveltejs/site-kit': path.resolve('../../packages/site-kit/src/lib')
		}
	},
	ssr: {
		external: ['firebase']
	}

};

export default config;
