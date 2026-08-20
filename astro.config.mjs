import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

export default defineConfig({
  output: 'static',
  devToolbar: {
    enabled: false,
  },
  adapter: netlify(),
});
