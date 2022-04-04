import * as React from 'react';
import { Chart } from '../components/bar-chart';
//this file will contain react-router

//do we need to type what it returns?
const App: React.FunctionComponent = () => {
  return (
    <div>
      <h1>React render here</h1>
      <Chart data={[1.5, 0.02, 0.03, 0.02]}></Chart>
    </div>
  );
};

export default App;
