import { allPossibleQueriesType } from '../types';

const possibleQueries: allPossibleQueriesType = [
  {
    staticQueryString: `query{
              onePerson(id:"0"){
                         _
              }
            }`,
    queryFields: {
      name: true,
      height: true,
      age: false,
      mass: true,
      hair_color: true,
    },
    description: 'Basic GraphQL query 0',
    paragraph:
      'This query for one person is a basic GraphQL query with no special cases',
  },
  {
    staticQueryString: `query{
              onePerson(id:"1"){
                       _
              }
            }`,
    queryFields: {
      name: true,
      height: true,
      age: true,
      mass: false,
      hair_color: false,
    },
    description: 'Basic GraphQL query 1',
    paragraph:
      'This query for one person is a basic GraphQL query with no special cases',
  },
];

export default possibleQueries;
