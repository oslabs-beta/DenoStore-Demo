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
    (function inner(res: any) {
      Object.keys(res).forEach((field) => {
        if (!(typeof res[field] === 'boolean')) {
          inner(res[field]);
        }
        if (field === toggled) {
          res[field] = !res[field];
        }
      });
    })(results);
    setFieldSpans(results);
    handleEditQueryToRun(results);
  };

  //this creates an array of span elements for all fields in state with toggles to change
  //active fields to inactive onClick and therefore their CSS classes
  const renderFieldSpans = (spansState: {}): any | JSX.Element[] => {
    return Object.keys(spansState).map((field) => {
      if (!(typeof spansState[field] === 'object'))
        return (
          <div key={randomKey()}>
            <span
              className={
                (spansState[field] ? 'active' : 'inactive') +
                ' field field-indent'
              }
              onClick={(e) => toggle(e)}
              key={field}
            >
              {field}
            </span>
          </div>
        );
      else
        return (
          <div key={randomKey()}>
            <span className={'field field-indent'} key={field}>
              {field} {' {'}
            </span>
            {Object.keys(spansState[field]).map((nestedField) => (
              <div key={randomKey()}>
                <span
                  className={
                    (field[nestedField] ? 'active' : 'inactive') +
                    ' field nested-field-indent'
                  }
                  onClick={(e) => toggle(e)}
                  key={nestedField}
                >
                  {nestedField}
                </span>
              </div>
            ))}
            <span className="field-indent field" key={randomKey()}>
              {'}'}
            </span>
          </div>
        );
    });
  };

  //this is the html to return for query 0

  if (currSelectionIdx === 0)
    return (
      <div className="queryEditField" key={randomKey()}>
        <span className="active" key={randomKey()}>
          query AllRockets{'{'}
        </span>
        <br />
        <br />
        <span className="queryName active" key={randomKey()}>
          rockets{'{'}
        </span>
        <br />
        <br />
        {renderFieldSpans(fieldSpans)}
        <br />
        <span className="queryName active" key={randomKey()}>
          {'}'}
        </span>
        <br />
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
        <br />
        <br />
        <span className="queryName active" key={randomKey()}>
          oneRocket{'('}id:"falcon9"{'){'}
        </span>
        <br />
        <br />
        {renderFieldSpans(fieldSpans)}
        <br />
        <span className="queryName active" key={randomKey()}>
          {'}'}
        </span>
        <br />
        <br />
        <span key={randomKey()} className="active">
          {'}'}
        </span>
      </div>
    );

  //this is the html to return for query 2

  if (currSelectionIdx === 2)
    return (
      <div className="queryEditField" key={randomKey()}>
        <span className="active" key={randomKey()}>
          query RocketComparison {'{'}
        </span>

        <br />
        <br />

        <span className="queryName active" key={randomKey()}>
          FalconNine: oneRocket{'('}id:"falcon9"{'){'}
        </span>

        <br />

        <span className="active field-indent">...comparisonField</span>

        <br />

        <span className="queryName active" key={randomKey()}>
          {'}'}
        </span>

        <br />

        <span className="queryName active" key={randomKey()}>
          FalconOne: oneRocket{'('}id:"falcon1"{'){'}
        </span>

        <br />

        <span className="active field-indent">...comparisonField</span>

        <br />

        <span className="queryName active" key={randomKey()}>
          {'}'}
        </span>

        <br />
        <br />

        <span key={randomKey()} className="active">
          {'}'}
        </span>

        <br />
        <br />
        <br />
        <br />

        <span className="active" key={randomKey()}>
          fragment comparisonField on RocketType {'{'}
        </span>

        <br />
        <br />
        {renderFieldSpans(fieldSpans)}
        <br />

        <span className="active" key={randomKey()}>
          {'}'}
        </span>
      </div>
    );
};

export default EditableQueryInput;
