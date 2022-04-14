import * as React from 'react';
import { QuerySelectorDropdownProps } from '../../types';

const QuerySelectorDropdown: React.FC<QuerySelectorDropdownProps> = ({
  possibleQueries,
  handleSelection,
}) => {
  const [selected, setSelected] = React.useState<number>(0);

  const options = possibleQueries.map((queries, i) => (
    <option value={i} key={queries.description}>
      {queries.description}
    </option>
  ));

  return (
    <div>
      <select
        className="QuerySelectorDropdown"
        name="selectList"
        id="selectList"
        value={selected}
        key={selected}
        onChange={(e) => {
          const selection = +e.target.value;
          console.log(selection);
          handleSelection(selection);
          setSelected(selection);
        }}
      >
        {options}
      </select>
    </div>
  );
};

export default QuerySelectorDropdown;
