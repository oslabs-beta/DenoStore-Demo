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
      name: { isActive: true },
      height: { isActive: true },
      age: { isActive: false },
      mass: { isActive: true },
      hair_color: { isActive: false },
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
      name: { isActive: true },
      height: { isActive: true },
      age: { isActive: false },
      mass: { isActive: true },
      hair_color: { isActive: false },
    },
    description: 'Basic GraphQL query',
    paragraph:
      'This query for one person is a basic GraphQL query with no special cases',
  },
];

export default possibleQueries;
