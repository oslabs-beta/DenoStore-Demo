import * as React from 'react';
import DemoVisualization from './DemoVisualization';
import QuerySelectorDropdown from './QuerySelectorDropdown';
import possibleQueries from '../possibleQueries';
import { ChartPropsData } from '../../types';
import EditableQueryInput from './EditableQueryInput';
import { queryCombiner, randomKey } from '../../utils';

const DemoContainer: React.FC = () => {
  // this keeps track of which query string we'll be adding fields to (selected in dropdown)
  const [currSelectionIdx, setCurrSelectionIdx] = React.useState<number>(0);

  // this is the final query string (including selected and all true fields before & after edit)
  const [queryToRun, setQueryToRun] = React.useState(
    queryCombiner(
      possibleQueries[0].queryFields,
      possibleQueries[0].staticQueryString
    )
  );

  //this is the result of the query from the backend and time it took
  const [queryResults, setQueryResults] = React.useState<ChartPropsData[]>([]);

  // drilled function to set the selected possibleQuery obj from the dropdown menu a level below
  // also changes queryToRun on selection change
  const handleSelection = (selection: number) => {
    const { queryFields, staticQueryString } = possibleQueries[selection];
    setCurrSelectionIdx(selection);
    setQueryToRun(queryCombiner(queryFields, staticQueryString));
  };

  // drilled function to set the queryToRun state with a combined query string updated with
  // all the edited fields from the user in the edit field component
  const handleEditQueryToRun = (fieldState: { [key: string]: boolean }) => {
    const { staticQueryString } = possibleQueries[currSelectionIdx];
    setQueryToRun(queryCombiner(fieldState, staticQueryString));
  };

  return (
    <div className="demo" id="demo">
      <h1 className="demoText">Demo</h1>
      <h2 className="demoInstructions">Demo Explanations and Instructions</h2>
      <p>{possibleQueries[currSelectionIdx].paragraph}</p>
      <p>{`This is the current query:  ${queryToRun}`}</p>

      <EditableQueryInput
        queryFields={possibleQueries[currSelectionIdx].queryFields}
        key={possibleQueries[currSelectionIdx].staticQueryString}
        handleEditQueryToRun={handleEditQueryToRun}
      />

      <DemoVisualization />
      <div className="buttons-row">
        <QuerySelectorDropdown
          possibleQueries={possibleQueries}
          handleSelection={handleSelection}
          key={randomKey()}
          currSelectionIdx={currSelectionIdx}
        />
        <button className={'runQuery'}>Run Query</button>
        <button className={'clearCache'}>Clear Query / Clear Cache</button>
      </div>
    </div>
  );
};

export default DemoContainer;
