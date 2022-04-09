import * as React from 'react';
import { possibleQueryType } from '../types';

// const toggleActiveInactive = (e) => {
//   e.target.className = e.target.className === 'active' ? 'inactive' : 'active';
// };

const testComp: React.FC = () => {
  return (
    <div>
      <span className="active">query {'{'}</span>
      <br />
      <span className="queryName active">
        onePerson{'('}id:"2"{')'}
        {'{'}
      </span>
      <br />
      <span className="active field">name</span>
      <br />
      <span className="active field">height</span>
      <br />
      <span className="active field">age</span>
      <br />
      <span className="inactive field">hair_color</span>
      <br />
      <span className="queryName">{'}'}</span>
      <br />
      <span>{'}'}</span>
    </div>
  );
};

const possibleQueries: possibleQueryType[] = [
  {
    query: `query{
              onePerson(id:"2"){
                name
                height
                age
                hair_color
              }
            }`,
    description: 'Basic GraphQL query',
    paragraph:
      'This query for one person is a basic GraphQL query with no special cases',
    queryHTML: `
    <span class="active">query {</span>
     <br><span class="queryName active">onePerson(id:"2"){</span>
     <br><span class="active field">name</span>
            <br><span class="active field">height</span>
            <br><span class="active field">age</span>
            <br><span class="inactive field">hair_color</span>
            <br><span class="queryName">}</span>
            <br><span>}</span>
     `,
    queryComponent: testComp,
  },
];

export default possibleQueries;
