//imports needed to instantiate Denostore
import { Denostore } from '../deps.ts';
import { connect } from '../deps.ts';
import { typeDefs, resolvers } from './../schema.ts';

// set up redis connection
const redis = await connect({
  hostname: String(Deno.env.get('REDIS_HOST')),
  port: Deno.env.get('REDIS_PORT'),
});

//instantiate Denostore
export const denostore = new Denostore({
  schema: { typeDefs, resolvers },
  usePlayground: true,
  redisClient: redis,
});
