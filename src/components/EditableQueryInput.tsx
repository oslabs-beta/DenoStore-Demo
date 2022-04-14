import * as React from 'react';
import { EditableQueryInputPropsInt } from '../../types';
import { randomKey } from '../../utils';

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
    setFieldSpans(results);
    handleEditQueryToRun(results);
  };

  //this creates an array of span elements for all fields in state with toggles to change
  //active fields to inactive onClick and therefore their CSS classes
  const renderFieldSpans = (spansState: {}): JSX.Element[] => {
    return Object.keys(spansState).map((field) => (
      <div key={randomKey()}>
        <br />{' '}
        <span
          className={(spansState[field] ? 'active' : 'inactive') + ' field'}
          onClick={(e) => toggle(e)}
          key={field}
        >
          {field}
        </span>
      </div>
    ));
  };

  //right now only the fields are dynamically rendered in spans, the rest is hard coded
  return (
    <div className="queryEditField" key={randomKey()}>
      <span className="active" key={randomKey()}>
        query {'{'}
      </span>
      <br />
      <br />
      <span className="queryName active" key={randomKey()}>
        onePerson{'('}id:""{')'}
        {'{'}
      </span>
      {renderFieldSpans(fieldSpans)}
      <br />
      <span className="queryName" key={randomKey()}>
        {'}'}
      </span>
      <br />
      <span key={randomKey()}>{'}'}</span>
    </div>
  );
};

export default EditableQueryInput;
