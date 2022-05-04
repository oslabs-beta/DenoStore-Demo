//imports needed to instantiate Denostore
import { Denostore, connect, parseURL } from '../deps.ts';
import { typeDefs, resolvers } from './../schema.ts';

// set up redis connection
const redis = await connect({
  hostname: 'localhost',
  port: 6379,
});

// for docker-compose
// const redis = await connect({
//   hostname: String(Deno.env.get('REDIS_HOST')),
//   port: Deno.env.get('REDIS_PORT'),
// });

// for heroku deployment
// const redis = await connect(parseURL(String(Deno.env.get('REDIS_URL'))));

//instantiate Denostore
export const denostore = new Denostore({
  schema: { typeDefs, resolvers },
  usePlayground: true,
  redisClient: redis,
  defaultEx: 10,
});
