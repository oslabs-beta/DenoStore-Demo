import { gql } from 'https://deno.land/x/graphql_tag@0.0.1/mod.ts';

export const resolvers = {
  Query: {
    oneRocket: async (
      _parent: any,
      args: any,
      { denostore }: any,
      info: any
    ) => {
      return await denostore.cache({ info }, async () => {
        const results = await fetch(
          `https://api.spacexdata.com/v3/rockets/${args.id}`
        ).then((res) => res.json());
        // console.log('api call');

        return results;
      });
    },
    rockets: async (
      _parent: any,
      _args: any,
      { denostore }: any,
      info: any
    ) => {
      return await denostore.cache({ info }, async () => {
        const results = await fetch(
          `https://api.spacexdata.com/v3/rockets`
        ).then((res) => res.json());
        // console.log('api call');
        return results;
      });
    },
  },
};

export const typeDefs = gql`
  type RocketType {
    id: Int
    active: String
    stages: Int
    first_flight: String
    country: String
    wikipedia: String
    description: String
    rocket_id: String
    rocket_name: String
    rocket_type: String
    height: DimensionType
    diameter: DimensionType
  }

  type DimensionType {
    meters: Float
    feet: Float
  }

  type Query {
    oneRocket(id: ID): RocketType
    rockets: [RocketType]!
  }`
;