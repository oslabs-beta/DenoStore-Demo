import * as React from 'react';

const QuerySelectorDropdown: React.FC = () => {
  return (
    <div>
      <select
        className="QuerySelectorDropdown"
        name="selectList"
        id="selectList"
      >
        <option value="queryOne">Query 1</option>
        <option value="queryTwo">Query 2</option>
        <option value="queryThree">Query 3</option>
        <option value="queryFour">Query 4</option>
      </select>
    </div>
  );
};

export default QuerySelectorDropdown;
