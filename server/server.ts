// server and backend running in Deno

// @ts-ignore
import { Application, Router } from 'https://deno.land/x/oak@v10.2.0/mod.ts';

const app = new Application();

app.use((ctx) => {
  ctx.response.body = 'Hello world';
});

const port = 3000;

app.addEventListener('listen', () => {
  console.log(`Listening on localhost:${port}`);
});

await app.listen({ port });
