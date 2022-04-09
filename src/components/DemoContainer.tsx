import * as React from 'react';
import QueryEditField from './QueryEditField';
import DemoVisualization from './DemoVisualization';
import QuerySelectorDropdown from './QuerySelectorDropdown';
import possibleQueries from '../possibleQueries';
import { ChartPropsData } from '../../types';

const DemoContainer: React.FC = () => {
  const [selectedQuery, setSelectedQuery] = React.useState('');
  const [queryToRun, setQueryToRun] = React.useState('');
  const [queryResults, setQueryResults] = React.useState<ChartPropsData[]>([]);
  return (
    <div className="demo" id="demo">
      <h1 className="demoText">Demo</h1>
      <h2 className="demoInstructions">Demo Explanations and Instructions</h2>
      {possibleQueries.map((query, i) => {
        const Span = query.queryComponent;
        return <Span />;
      })}
      <DemoVisualization />
      <QuerySelectorDropdown />
      <button className={'runQuery'}>Run Query</button>
      <button className={'clearCache'}>Clear Query / Clear Cache</button>
    </div>
  );
};

export default DemoContainer;
