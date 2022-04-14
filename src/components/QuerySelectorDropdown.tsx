import * as React from 'react';
import { QuerySelectorDropdownProps } from '../../types';

const QuerySelectorDropdown: React.FC<QuerySelectorDropdownProps> = ({
  possibleQueries,
  handleSelection,
}) => {
  const [curr, setCurr] = React.useState(0);
  const options = possibleQueries.map((queries, i) => (
    <option value={i} key={Math.floor(Math.random() * 10000)}>
      {queries.description}
    </option>
  ));

  return (
    <div>
      <select
        className="QuerySelectorDropdown"
        name="selectList"
        id="selectList"
        value={curr}
        onChange={(e) => {
          const selection = +e.target.value;
          setCurr(selection);
          handleSelection(selection);
        }}
      >
        {options}
      </select>
    </div>
  );
};

export default QuerySelectorDropdown;
