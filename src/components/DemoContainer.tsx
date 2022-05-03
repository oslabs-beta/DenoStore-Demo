import * as React from 'react';
import axios from 'axios';
import QuerySelectorDropdown from './QuerySelectorDropdown';
import possibleQueries from '../possibleQueries';
import { ChartPropsData } from '../../types';
import EditableQueryInput from './EditableQueryInput';
import BarChart from './BarChart';
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

  // show what the results are from each query
  const [queryData, setQueryData] = React.useState({ results: [] });

  // this is the result of the query from the backend and time it took
  const [queryTime, setQueryTime] = React.useState<ChartPropsData>({
    data: [],
  });

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

  // when the runQuery button is clicked, it runs the query and sets the state of the time it took for the query
  // to hit or miss the cache and come back with the results
  const runQuery = async () => {
    setCacheIsClear(false);

    let final: number;
    let start: number = Date.now();

    const { data } = await axios
      .post('/graphql', {
        query: queryToRun,
      })
      .then((data) => {
        final = Date.now() - start;
        return data.data;
      })
      .catch((err) => console.log(err));

    setQueryTime({
      data: [
        ...queryTime.data,
        {
          time: final,
          queryCountName: `Query ${queryTime.data.length + 1}`,
        },
      ],
    });

    // for the rockets query
    if (data.rockets) {
      setQueryData({ results: [data.rockets] });
    }
    // for the oneRocket query
    else if (data.oneRocket) {
      setQueryData({ results: [data.oneRocket] });
    }
  };

  //c lears the cache and resets the state when the clear cache button is clicked
  const clearCache = async () => {
    console.log('clearCache fired');
    // clears the cache
    axios
      .post('/graphql', {
        query: `query {clearCacheQuery}`,
      })
      .catch((err) => console.log(err));

    // resets the state now that the query and cache are cleared
    setQueryTime({ data: [] });
    setCurrSelectionIdx(0);
    setQueryToRun(
      queryCombiner(
        possibleQueries[0].queryFields,
        possibleQueries[0].staticQueryString
      )
    );
    setCacheIsClear(true);
    setQueryData({ results: [] });
  };

  return (
    <div className="demoContainer" id="demo">
      <h1 className="subTitle">Demo</h1>

      {/* this renders the description of the currently selected query and the state after any user edits */}
      <div className="demoParagraphs">
        <p>{possibleQueries[currSelectionIdx].paragraph}</p>
        <p>
          This is the current query as edited below:
          <br />
          <br />
          <span className="active no-toggle" id="queryToRun">
            {queryToRun}
          </span>
        </p>
      </div>

      {/* this renders the editable field and dropdown on the left of the Demo section */}

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

        {/* this renders the bar chart and both run/clear buttons on the right of the Demo section */}
        <div className="visual-column">
          <BarChart data={queryTime.data} />
          <div className="buttons-row">
            <button className={'runQuery'} onClick={runQuery}>
              Run Query
            </button>
            <button className={'clearCache'} onClick={clearCache}>
              Clear Query / Clear Cache
            </button>
          </div>

          {/* this renders the cache is cleared text only when it has been cleared   */}
          {cacheIsClear && (
            <div className="clearCacheText">
              Cache has been successfully cleared.
            </div>
          )}
        </div>
      </div>

      {/* this renders the data received back from user-initiated queries*/}
      {queryData.results.length > 0 ? (
        <div className="query-results-container">
          <span className="active no-toggle">
            {JSON.stringify(queryData.results)}
          </span>
        </div>
      ) : null}
    </div>
  );
};

export default DemoContainer;
