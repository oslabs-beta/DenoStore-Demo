import * as React from 'react';
import axios from 'axios';
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

  const time = () =>{
    // set a start time
    // const start =2000
    console.log(queryToRun)
    // const end =  Date.now()
    // const final = end - start
    // console.log(final)

  }
  return (
    <div className="demoContainer" id="demo">
      <h1 className="demoTitle">Demo</h1>
      <div className="demoParagraphs">
        <p>{possibleQueries[currSelectionIdx].paragraph}</p>
        <p>{`This is the current query:  ${queryToRun}`}</p>
      </div>
      <div className="queries-main-row">
        <EditableQueryInput
          queryFields={possibleQueries[currSelectionIdx].queryFields}
          key={possibleQueries[currSelectionIdx].staticQueryString}
          handleEditQueryToRun={handleEditQueryToRun}
        />

        <DemoVisualization />
      </div>
      <div className="buttons-row">
        <QuerySelectorDropdown
          possibleQueries={possibleQueries}
          handleSelection={handleSelection}
          key={randomKey()}
          currSelectionIdx={currSelectionIdx}
        />
        <button className={'runQuery'} onClick={time}>Run Query</button>
        <button className={'clearCache'}>Clear Query / Clear Cache</button>
      </div>
    </div> 
  );
};

export default DemoContainer;
