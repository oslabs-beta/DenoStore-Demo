//imports needed to instantiate Denostore
import { Denostore } from '../deps.ts';
import { connect } from '../deps.ts';
import { typeDefs, resolvers } from './../schema.ts';

// set up redis connection
const redis = await connect({
  hostname: 'localhost',
  port: 6379,
});

//instantiate Denostore
export const denostore = new Denostore({
  schema: { typeDefs, resolvers },
  usePlayground: true,
  redisClient: redis,
});
