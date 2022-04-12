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
        >
          {field}
        </span>
      </>
    ));
  };

  return (
    <div className="queryEditField">
      <span className="active">query {'{'}</span>
      <br />
      <span className="queryName active">
        onePerson{'('}id:"2"{')'}
        {'{'}
      </span>
      {renderFieldSpans(fieldSpans)}
      <br />
      <span className="queryName">{'}'}</span>
      <br />
      <span>{'}'}</span>
    </div>
  );
};

export default EditableQueryInput;
