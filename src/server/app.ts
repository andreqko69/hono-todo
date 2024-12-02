import { Hono } from 'hono';
import todo from '@/src/server/features/todo/route';

export const runtime = 'nodejs';

const app = new Hono().basePath('/api');

app.route('/todo', todo);

export default app;
