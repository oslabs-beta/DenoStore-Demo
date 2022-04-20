import * as React from 'react';
import { EditableQueryInputPropsInt } from '../../types';
import { randomKey } from '../../utils';

const EditableQueryInput: React.FC<EditableQueryInputPropsInt> = ({
  queryFields,
  handleEditQueryToRun,
  currSelectionIdx,
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

  //this is the html to return for query 0

  if (currSelectionIdx === 0)
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
        <span className="queryName active" key={randomKey()}>
          {'}'}
        </span>
        <br />
        <span key={randomKey()} className="active">
          {'}'}
        </span>
      </div>
    );

  //this is the html to return for query 1

  if (currSelectionIdx === 1)
    return (
      <div className="queryEditField" key={randomKey()}>
        <span className="active" key={randomKey()}>
          query {'{'}
        </span>
      </div>
    );

  //this is the html to return for query 2

  if (currSelectionIdx === 2)
    return (
      <div className="queryEditField" key={randomKey()}>
        <span className="active" key={randomKey()}>
          testing {'{'}
        </span>
      </div>
    );
};

export default EditableQueryInput;
