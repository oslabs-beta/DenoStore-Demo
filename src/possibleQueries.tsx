import { allPossibleQueriesType } from '../types';

const possibleQueries: allPossibleQueriesType = [
  {
    selectableQuery: `query{
              onePerson(id:"2"){
                name
                height
                age
                hair_color
              }
            }`,
    queryFields: {
      name: true,
      height: true,
      age: false,
      mass: true,
      hair_color: false,
    },
    description: 'Basic GraphQL query',
    paragraph:
      'This query for one person is a basic GraphQL query with no special cases',
  },
  {
    selectableQuery: `query{
              onePerson(id:"2"){
                name
                height
                age
                hair_color
              }
            }`,
    queryFields: {
      name: true,
      height: true,
      age: false,
      mass: true,
      hair_color: false,
    },
    description: 'Basic GraphQL query',
    paragraph:
      'This query for one person is a basic GraphQL query with no special cases',
  },
];

export default possibleQueries;
