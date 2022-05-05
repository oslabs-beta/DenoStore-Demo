import * as React from 'react';
import { QuerySelectorDropdownProps } from '../../types';

const QuerySelectorDropdown: React.FC<QuerySelectorDropdownProps> = ({
  possibleQueries,
  handleSelection,
  currSelectionIdx,
}) => {
  const options = possibleQueries.map(({ description }, i) => (
    <option value={i} key={description}>
      {description}
    </option>
  ));

  return (
    <div>
      <select
        className="QuerySelectorDropdown"
        name="selectList"
        id="selectList"
        value={currSelectionIdx}
        key={currSelectionIdx}
        onChange={(e) => {
          handleSelection(+e.target.value);
        }}
      >
        {options}
      </select>
    </div>
  );
};

export default QuerySelectorDropdown;
