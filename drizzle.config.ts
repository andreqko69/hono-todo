import '@/src/server/lib/drizzle/envConfig';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './src/server/lib/drizzle/migrations',
  schema: './src/server/lib/drizzle/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
