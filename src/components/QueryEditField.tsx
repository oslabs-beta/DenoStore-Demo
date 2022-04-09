import * as React from 'react';
import { Markup } from 'interweave';

type queryHTMLType = {
  query: string;
};

const QueryEditField: React.FC<queryHTMLType> = ({ query }) => {
  return (
    <div className="queryEditField">
      <Markup content={query} />
    </div>
  );
};

export default QueryEditField;
