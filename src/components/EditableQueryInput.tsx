import * as React from 'react';
import { EditableQueryInputPropsInt } from '../../types';

const EditableQueryInput: React.FC<EditableQueryInputPropsInt> = ({
  queryFields,
  handleEditQueryToRun,
}) => {
  const [fieldSpans, setFieldSpans] = React.useState(queryFields);

  //this toggles the true/false value of all fields and the dependent CSS classes
  const toggle = (e) => {
    const toggled = e.target.innerText;
    const results = { ...fieldSpans };
    Object.keys(results).forEach((field) => {
      if (field === toggled) {
        results[field] = !results[field];
      }
    });
    console.log(results);
    setFieldSpans(results);
    handleEditQueryToRun(results);
  };

  //this creates an array of span elements for all fields in state with toggles to change
  //active fields to inactive onClick and therefore their CSS classes
  const renderFieldSpans = (spansState: {}): JSX.Element[] => {
    return Object.keys(spansState).map((field) => (
      <>
        <br />{' '}
        <span
          className={(spansState[field] ? 'active' : 'inactive') + ' field'}
          onClick={(e) => toggle(e)}
          key={Math.floor(Math.random() * 10000)}
        >
          {field}
        </span>
      </>
    ));
  };

  //right now only the fields are dynamically rendered in spans, the rest is hard coded
  return (
    <div className="queryEditField" key={Math.floor(Math.random() * 10000)}>
      <span className="active" key={Math.floor(Math.random() * 10000)}>
        query {'{'}
      </span>
      <br />
      <span
        className="queryName active"
        key={Math.floor(Math.random() * 10000)}
      >
        onePerson{'('}id:""{')'}
        {'{'}
      </span>
      {renderFieldSpans(fieldSpans)}
      <br />
      <span className="queryName" key={Math.floor(Math.random() * 10000)}>
        {'}'}
      </span>
      <br />
      <span key={Math.floor(Math.random() * 10000)}>{'}'}</span>
    </div>
  );
};

export default EditableQueryInput;
