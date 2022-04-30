import { allPossibleQueriesType } from '../types';

const possibleQueries: allPossibleQueriesType = [
  {
    staticQueryString: `query AllRockets { rockets { _ } }`,
    queryFields: {
      id: true,
      active: true,
      rocket_name: true,
      first_flight: true,
      country: false,
      description: false,
      wikipedia: false,
      height: {
        feet: true,
        meters: false,
      },
    },
    description: 'Query with Operation Name',
    paragraph:
      'This query is for all SpaceX rockets and includes the operation name AllRockets.',
  },
  {
    staticQueryString: `query { oneRocket(id:"falcon9") { _ } }`,
    queryFields: {
      id: false,
      active: false,
      rocket_name: true,
      first_flight: true,
      country: false,
      description: true,
      wikipedia: false,
      height: {
        feet: true,
        meters: false,
      },
    },
    description: 'Basic Query with Argument',
    paragraph:
      'This query is for all data on the single rocket with id Falcon 9.',
  },
  {
    staticQueryString: `query RocketComparison { FalconNine: oneRocket(id:"falcon9") { ...comparisonField } FalconOne: oneRocket(id:"falcon1") { ...comparisonField } } fragment comparisonField on RocketType { _ }`,
    queryFields: {
      id: true,
      active: true,
      stages: true,
      country: true,
      rocket_name: true,
      rocket_type: true,
      description: false,
      diameter: {
        feet: true,
        meters: false,
      },
    },
    description: 'Fragment, Aliases, Arguments',
    paragraph:
      'This query includes and caches a Fragment (comparisonField), Aliases (FalconNine, FalconeOne), and differing Arguments (id:"falcon9" or id:"falcon1").',
  },
];

export default possibleQueries;
