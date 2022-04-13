import * as React from 'react';
import DemoVisualization from './DemoVisualization';
import QuerySelectorDropdown from './QuerySelectorDropdown';
import possibleQueries from '../possibleQueries';
import { ChartPropsData } from '../../types';
import EditableQueryInput from './EditableQueryInput';
import { queryCombiner, getCurrQueryFields } from '../../utils';

const DemoContainer: React.FC = () => {
  // this keeps track of which query string we'll be adding fields to (selected in dropdown)
  const [selectedQuery, setSelectedQuery] = React.useState(
    possibleQueries[0].selectableQuery
  );

  // this is the final query string (including selected and all true fields before & after edit)
  const [queryToRun, setQueryToRun] = React.useState(
    queryCombiner(possibleQueries[0].queryFields, selectedQuery)
  );

  //this is the result of the query from the backend and time it took
  const [queryResults, setQueryResults] = React.useState<ChartPropsData[]>([]);

  // when the selected query changes (dropdown is changed), reset the chart and queryToRun state
  React.useEffect(() => {
    handleEditQueryToRun(getCurrQueryFields(selectedQuery));
  }, [selectedQuery]);

  // drilled function to set the selected possibleQuery obj from the dropdown menu a level below
  const handleSelection = (selection: string) => {
    setSelectedQuery(selection);
  };

  // drilled function to set the queryToRun state with a combined query string updated with
  // all the edited fields from the user in the edit field component
  const handleEditQueryToRun = (fieldState: { [key: string]: boolean }) => {
    const edited = queryCombiner(fieldState, selectedQuery);
    setQueryToRun(edited);
  };

  return (
    <div className="demo" id="demo">
      <h1 className="demoText">Demo</h1>
      <h2 className="demoInstructions">Demo Explanations and Instructions</h2>
      <p>{`This is the current query:  ${queryToRun}`}</p>
      <EditableQueryInput
        queryFields={getCurrQueryFields(selectedQuery)} // make this dynamic to re-render the editable field on re-select
        handleEditQueryToRun={handleEditQueryToRun}
      />
      <DemoVisualization />
      <QuerySelectorDropdown
        possibleQueries={possibleQueries}
        handleEditQueryToRun={handleEditQueryToRun}
        handleSelection={handleSelection}
      />
      <button className={'runQuery'}>Run Query</button>
      <button className={'clearCache'}>Clear Query / Clear Cache</button>
    </div>
  );
};

export default DemoContainer;
