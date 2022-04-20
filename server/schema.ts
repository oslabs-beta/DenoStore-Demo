import { gql } from 'https://deno.land/x/graphql_tag@0.0.1/mod.ts';



export const resolvers = {
    Query: {
       oneRocket: async (           
           _parent: any,
           args: any,
           { denostore }: any,
           info: any
       ) => {
        const results = await denostore.cache( 
        { info },
        async () => {
            const results = await fetch (
                `https://api.spacexdata.com/v3/rockets/${args.id}`
            ).then((res) => res.json());
            console.log('api call');
           
            return results
          }        
        );
        return results;
    },
     manyRockets: async (
        _parent: any,
        ags: any,
        { denostore }: any,
        info: any 
     ) => {
        const results = await denostore.cache(
        { info },
         async () => {
            const results = await fetch (
                `https://api.spacexdata.com/v3/rockets`
            ).then((res) => res.json());
            console.log('api call');
            return results
        }
    );
    return results    
    }
  }
}

export const typeDefs = gql`
type RocketType {
    id: String
    active: String
    stages: String
    first_flight: String
    country: String
    wikipedia: String
    description: String
    rocket_id: String
    rocket_name: String
    rocket_type: String
}


type Query {
    oneRocket(id: ID): RocketType
    manyRockets: [RocketType]!
}
`

