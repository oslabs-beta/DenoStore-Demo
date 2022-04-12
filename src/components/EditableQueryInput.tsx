import * as React from 'react';

const EditableQueryInput: React.FC<{ [key: string]: any }> = ({
  queryFields,
}) => {
  const [fieldSpans, setFieldSpans] = React.useState(queryFields);

  const toggle = (e) => {
    const toggled = e.target.innerText;
    const results = { ...fieldSpans };
    Object.keys(results).forEach((field) => {
      if (field === toggled) {
        results[field].isActive = !results[field].isActive;
      }
    });
    setFieldSpans(results);
  };

  const renderFieldSpans = (spansState: {}): JSX.Element[] => {
    return Object.keys(spansState).map((field) => (
      <>
        <br />{' '}
        <span
          className={
            (spansState[field].isActive ? 'active' : 'inactive') + ' field'
          }
          onClick={(e) => toggle(e)}
          key={Math.floor(Math.random() * 1000)}
        >
          {field}
        </span>
      </>
    ));
  };

  return (
    <div className="queryEditField" key={Math.floor(Math.random() * 1000)}>
      <span className="active" key={Math.floor(Math.random() * 1000)}>
        query {'{'}
      </span>
      <br />
      <span className="queryName active" key={Math.floor(Math.random() * 1000)}>
        onePerson{'('}id:"2"{')'}
        {'{'}
      </span>
      {renderFieldSpans(fieldSpans)}
      <br />
      <span className="queryName" key={Math.floor(Math.random() * 1000)}>
        {'}'}
      </span>
      <br />
      <span key={Math.floor(Math.random() * 1000)}>{'}'}</span>
    </div>
  );
};

export default EditableQueryInput;
