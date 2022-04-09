import * as React from 'react';
import { possibleQueryType } from '../types';

const EditableQuery: React.FC = () => {
  const [spans, setSpans] = React.useState({
    name: { class: 'active' },
    height: { class: 'active' },
    age: { class: 'inactive' },
    mass: { class: 'active' },
    hair_color: { class: 'inactive' },
  });

  const toggle = (e) => {
    const toggled = e.target.innerText;
    const results = { ...spans };
    Object.keys(results).forEach((field) => {
      if (field === toggled) {
        results[field].class === 'active'
          ? (results[field].class = 'inactive')
          : (results[field].class = 'active');
      }
    });
    setSpans(results);
  };

  return (
    <div className="queryEditField">
      <span className="active">query {'{'}</span>
      <br />
      <span className="queryName active">
        onePerson{'('}id:"2"{')'}
        {'{'}
      </span>
      {Object.keys(spans).map((field) => (
        <>
          <br />{' '}
          <span
            className={spans[field].class + ' field'}
            onClick={(e) => toggle(e)}
          >
            {field}
          </span>
        </>
      ))}
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
    queryComponent: EditableQuery,
  },
];

export default possibleQueries;
