import * as React from 'react';
import DemoVisualization from './DemoVisualization';
import QuerySelectorDropdown from './QuerySelectorDropdown';
import possibleQueries from '../possibleQueries';
import { ChartPropsData } from '../../types';
import EditableQueryInput from './EditableQueryInput';
import { queryCombiner } from '../../utils';

const DemoContainer: React.FC = () => {
  // this keeps track of which query string we'll be adding fields to (which is selected in dropdown)
  const [selectedQuery, setSelectedQuery] = React.useState(
    possibleQueries[0].selectableQuery
  );

  // this is the query string that's selected with all edited T/F fields
  const [queryToRun, setQueryToRun] = React.useState(
    queryCombiner(possibleQueries[0].queryFields, selectedQuery)
  );

  //this is the result of the query from the backend
  const [queryResults, setQueryResults] = React.useState<ChartPropsData[]>([]);

  // when the selected query changes (dropdown is changed), reset the chart and the queryToRun
  React.useEffect(() => {
    // find the query Obj selected
    const selected = possibleQueries.find(
      (obj) => obj.selectableQuery === selectedQuery
    );
    handleEditQueryToRun(selected.queryFields);
    console.log('selectedQuery state in container: ', selectedQuery);
    console.log('queryToRun state in container: ', queryToRun);
  }, [selectedQuery]);

  React.useEffect(() => {
    console.log('queryToRun state in container: ', queryToRun);
  }, [queryToRun]);

  // drillable function to set the selected possibleQuery obj from the dropdown menu a level below
  const handleSelection = (selection: string) => {
    setSelectedQuery(selection);
  };

  // drillable function to set the queryToRun state with a combined query string updated with
  // all the edited fields from the user in the edit field component
  const handleEditQueryToRun = (fieldState: { [key: string]: boolean }) => {
    const edited = queryCombiner(fieldState, selectedQuery);
    setQueryToRun(edited);
  };

  return (
    <div className="demo" id="demo">
      <h1 className="demoText">Demo</h1>
      <h2 className="demoInstructions">Demo Explanations and Instructions</h2>
      <EditableQueryInput
        queryFields={possibleQueries[0].queryFields} // make this dynamic to re-render the editable field on re-select
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
