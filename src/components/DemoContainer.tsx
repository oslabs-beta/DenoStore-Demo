import * as React from 'react';
import axios from 'axios';
import DemoVisualization from './DemoVisualization';
import QuerySelectorDropdown from './QuerySelectorDropdown';
import possibleQueries from '../possibleQueries';
import { ChartPropsData } from '../../types';
import EditableQueryInput from './EditableQueryInput';
import { queryCombiner, randomKey } from '../../utils';
import { collapseTextChangeRangesAcrossMultipleVersions, isVariableDeclaration } from 'typescript';

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

  // conditional rendering of text when "Clear Cache" button is clicked
  const [cacheIsClear, setCacheIsClear] = React.useState<Boolean>(false);

  // drilled function to set the selected possibleQuery obj from the dropdown menu a level below
  // also changes queryToRun on selection change
  const handleSelection = (selection: number) => {
    const { queryFields, staticQueryString } = possibleQueries[selection];
    setCurrSelectionIdx(selection);
    setQueryToRun(queryCombiner(queryFields, staticQueryString));
    setCacheIsClear(false);
  };

  // drilled function to set the queryToRun state with a combined query string updated with
  // all the edited fields from the user in the edit field component
  const handleEditQueryToRun = (fieldState: { [key: string]: boolean }) => {
    const { staticQueryString } = possibleQueries[currSelectionIdx];
    setQueryToRun(queryCombiner(fieldState, staticQueryString));
  };

  const time = () =>{
    
    /* 
QueryResults is by default an empty array
each element will be an object of type QueryTimeObj
so for example finishing the first query if it took 5000 ms:
setQueryResults([...queryResults, {time: 5000, queryCountName: `Query ${queryResults.length}`}]

*/

   
    console.log('queryToRun in state: ', queryToRun)
    console.log('string as it should be: ', 'query AllRockets { rockets { id active rocket_name first_flight } }')
    
 
    let time = 0;
    const results =  axios.post('/graphql', {
      query: queryToRun,
        // 'query AllRockets { rockets { id active rocket_name first_flight } }',
       
    }).then((result) => console.log(result.data))
    // time = 5000
  //  setQueryResults([...queryResults, {time: variable, queryCountCountName: `Query ${queryResults.length + 1} `}])
  
  }

  const clearCache = () => {
    setQueryResults([]);
    setCurrSelectionIdx(0);
    setQueryToRun(
      queryCombiner(
        possibleQueries[0].queryFields,
        possibleQueries[0].staticQueryString
      )
    );
    setCacheIsClear(true);
  };

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
            <button className={'clearCache'} onClick={clearCache}>
              Clear Query / Clear Cache
            </button>
          </div>
          {cacheIsClear && (
            <div className="clearCacheText">
              Cache has been successfully cleared.
            </div>
          )}
        </div>
      </div>
    </div> 
  );
};

export default DemoContainer;
