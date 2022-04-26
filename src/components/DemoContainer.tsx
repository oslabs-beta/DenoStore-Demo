import * as React from 'react';
import axios from 'axios';
import DemoVisualization from './DemoVisualization';
import QuerySelectorDropdown from './QuerySelectorDropdown';
import possibleQueries from '../possibleQueries';
import { ChartPropsData } from '../../types';
import EditableQueryInput from './EditableQueryInput';
import { queryCombiner, randomKey } from '../../utils';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';

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
    
    

   
    console.log('queryToRun in state: ', queryToRun)
    console.log('string as it should be: ', 'query AllRockets { rockets { id active rocket_name first_flight } }')
    
 
    
    const results =  axios.post('/graphql', {
      query: queryToRun,
        // 'query AllRockets { rockets { id active rocket_name first_flight } }',
       
    }).then((result) => console.log(result.data))



  }

  return (
    <div className="demoContainer" id="demo">
      <h1 className="demoTitle">Demo</h1>
      <div className="demoParagraphs">
        <p>{possibleQueries[currSelectionIdx].paragraph}</p>
        <p>{`This is the current query:  ${queryToRun}`}</p>
      </div>
      <div className="main-queries-row">
        <div className="editable-column">
          <EditableQueryInput
            queryFields={possibleQueries[currSelectionIdx].queryFields}
            key={possibleQueries[currSelectionIdx].staticQueryString}
            handleEditQueryToRun={handleEditQueryToRun}
            currSelectionIdx={currSelectionIdx}
          />

          <QuerySelectorDropdown
            possibleQueries={possibleQueries}
            handleSelection={handleSelection}
            key={randomKey()}
            currSelectionIdx={currSelectionIdx}
          />
        </div>
        <div className="visual-column">
          <DemoVisualization />
          <div className="buttons-row">
            <button className={'runQuery'} onClick = {time}>Run Query</button>
            <button className={'clearCache'}>Clear Query / Clear Cache</button>
          </div>
        </div>
      </div>
    </div> 
  );
};

export default DemoContainer;
