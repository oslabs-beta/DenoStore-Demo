import * as React from 'react';
import axios from 'axios';
import DemoVisualization from './DemoVisualization';
import QuerySelectorDropdown from './QuerySelectorDropdown';
import possibleQueries from '../possibleQueries';
import { ChartPropsData } from '../../types';
import EditableQueryInput from './EditableQueryInput';
import { queryCombiner, randomKey } from '../../utils';
import { collapseTextChangeRangesAcrossMultipleVersions, isVariableDeclaration } from 'typescript';
import { incomingQueryData } from '../../types';
import { rocketData } from '../../types';



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
  
 
  // show what the results are from each query
  const [queryData, setQueryData] = React.useState<rocketData>({rockets:[]})

  React.useEffect(() => {
    console.log('query data object --->', queryData)
  }, [queryData])

  //this is the result of the query from the backend and time it took
  const [queryResults, setQueryResults] = React.useState<ChartPropsData>({data:[]});

  React.useEffect(() => {
    console.log('query results object --->', queryResults)
  }, [queryResults])

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

  const runQuery = async () =>{
    
    setCacheIsClear(false);
    
    let final: number;
    let start: number = Date.now();
    
    const results = await axios.post('/graphql', {
      query: queryToRun,
 
      }).then((results) => {
      final = Date.now() - start; 
      return results;
      }); 

    setQueryResults({data:[...queryResults.data, {time: final, queryCountName: `Query ${queryResults.data.length + 1}`}]});
  
    setQueryData({rockets:[results.data.data.rockets]});

  };

  const clearCache = () => {
    setQueryResults({data:[]});
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
            <button className={'runQuery'} onClick = {runQuery}>Run Query</button>            
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
