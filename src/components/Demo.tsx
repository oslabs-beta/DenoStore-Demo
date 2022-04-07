import * as React from 'react';
import DemoText from './DemoText';
import DemoInstructions from './DemoInstructions';
import Query from './Query';
import DemoVisualization from './DemoVisualization';
import QueryButtonDropdown from './QueryButtonDropdown';
import Button from './Button';

const Demo: React.FC = () => {
  return (
    <div className="demo" id= "demo">
      <DemoText />
      <DemoInstructions />
      <Query />
      <DemoVisualization />
      {/* <Button name={'Query Button'} className={'queryButton'} /> */}
      <QueryButtonDropdown />
      <Button name={'Run Query'} className={'runQuery'} />
      <Button name={'Run Query + Clear Cache'} className={'clearCache'} />
    </div>
  );
};

export default Demo;
