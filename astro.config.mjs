import { defineConfig } from 'astro/config';

const port = process.env.PORT ? Number(process.env.PORT) : 4330;

export default defineConfig({
  site: 'https://example.com',
  server: { port, host: true },
});
