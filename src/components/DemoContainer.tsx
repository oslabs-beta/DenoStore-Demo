import * as React from 'react';
import DemoInstructions from './DemoInstructions';
import QueryEditField from './QueryEditField';
import DemoVisualization from './DemoVisualization';
import QuerySelectorDropdown from './QuerySelectorDropdown';
import Button from './Button';

const DemoContainer: React.FC = () => {
  return (
    <div className="demo" id="demo">
      <h1 className="demoText">Demo</h1>
      <DemoInstructions />
      <QueryEditField />
      <DemoVisualization />
      {/* <Button name={'Query Button'} className={'queryButton'} /> */}
      <QuerySelectorDropdown />
      <Button name={'Run Query'} className={'runQuery'} />
      <Button name={'Run Query + Clear Cache'} className={'clearCache'} />
    </div>
  );
};

export default DemoContainer;
