import { Application } from 'https://deno.land/x/oak@v10.2.0/mod.ts';

import router from './routes/router.ts';
import { denostore } from './routes/denostore.ts';

const port: number = Number(Deno.env.get('PORT')) || 3000;

const app = new Application();

app.use(router.routes(), router.allowedMethods());
app.use(denostore.routes(), denostore.allowedMethods());

app.addEventListener('error', (event) => {
  console.error(event.error);
});

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    ctx.response.body = 'Internal server error';
    throw error;
  }
});

app.addEventListener('listen', () => {
  console.log(`Listening on localhost:${port}`);
});

await app.listen({ port });
