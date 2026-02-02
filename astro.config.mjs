// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import remarkToc from 'remark-toc';
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';

// https://astro.build/config
export default defineConfig({
  // ...
  integrations: [mdx()],
});