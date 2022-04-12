import * as React from 'react';
import DemoVisualization from './DemoVisualization';
import QuerySelectorDropdown from './QuerySelectorDropdown';
import possibleQueries from '../possibleQueries';
import { ChartPropsData } from '../../types';
import EditableQueryInput from './EditableQueryInput';

const DemoContainer: React.FC = () => {
  const [selectedQuery, setSelectedQuery] = React.useState(
    possibleQueries[0].selectableQuery
  );
  const [queryToRun, setQueryToRun] = React.useState('');
  const [queryResults, setQueryResults] = React.useState<ChartPropsData[]>([]);

  const handleSelection = (selection: string) => {
    setSelectedQuery(selection);
    console.log(selection);
  };

  return (
    <div className="demo" id="demo">
      <h1 className="demoText">Demo</h1>
      <h2 className="demoInstructions">Demo Explanations and Instructions</h2>
      <EditableQueryInput queryFields={possibleQueries[0].queryFields} />
      <DemoVisualization />
      <QuerySelectorDropdown
        possibleQueries={possibleQueries}
        handleSelection={handleSelection}
      />
      <button className={'runQuery'}>Run Query</button>
      <button className={'clearCache'}>Clear Query / Clear Cache</button>
    </div>
  );
};

export default DemoContainer;
