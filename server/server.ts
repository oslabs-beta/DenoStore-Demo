// server and backend running in Deno
import { Application } from 'https://deno.land/x/oak@v10.2.0/mod.ts';

const app = new Application();

app.use((ctx) => {
  ctx.response.body = 'Hello world';
});

await app.listen({ port: 3000 });
