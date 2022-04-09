import * as React from 'react';
import QueryEditField from './QueryEditField';
import DemoVisualization from './DemoVisualization';
import QuerySelectorDropdown from './QuerySelectorDropdown';

const DemoContainer: React.FC = () => {
  return (
    <div className="demo" id="demo">
      <h1 className="demoText">Demo</h1>
      <h2 className="demoInstructions">Demo Explanations and Instructions</h2>
      <QueryEditField />
      <DemoVisualization />
      <QuerySelectorDropdown />
      <button className={'runQuery'}>Run Query</button>
      <button className={'clearCache'}>Clear Query / Clear Cache</button>
    </div>
  );
};

export default DemoContainer;
