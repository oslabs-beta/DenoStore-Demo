import { gql } from './deps.ts';

export const resolvers = {
  Query: {
    oneRocket: async (_parent: any, args: any, { ds }: any, info: any) => {
      return await ds.cache({ info }, async () => {
        const results = await fetch(
          `https://api.spacexdata.com/v3/rockets/${args.id}`
        ).then((res) => res.json());
        return results;
      });
    },

    rockets: async (_parent: any, _args: any, { ds }: any, info: any) => {
      return await ds.cache({ info }, async () => {
        const results = await fetch(
          `https://api.spacexdata.com/v3/rockets`
        ).then((res) => res.json());
        return results;
      });
    },

    clearCacheQuery: async (
      _parent: any,
      _args: any,
      { ds }: any,
      _info: any
    ) => {
      await ds.clear();
      return 'Cache cleared';
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
    clearCacheQuery: String
  }
`;
