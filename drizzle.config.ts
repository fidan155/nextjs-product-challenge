// drizzle.config.js
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/db/schema.js',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgres://postgres:geheim@localhost:5432/pk_db',
  },
});