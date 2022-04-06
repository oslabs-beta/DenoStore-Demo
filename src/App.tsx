import * as React from 'react';
import { Chart } from '../components/bar-chart';
import { addTimeType } from '../types';
//this file will contain react-router

//do we need to type what it returns?
const App: React.FunctionComponent = () => {
  const [data, setData] = React.useState([
    { time: 7.5, queryCountName: 'Query 1' },
    // { time: 0.02, queryCountName: 'Query 2' },
    // { time: 0.03, queryCountName: 'Query 3' },
    // { time: 0.08, queryCountName: 'Query 4' },
  ]);

  const addTime: addTimeType = (time: number) => {
    setData([...data, { time, queryCountName: `Query ${data.length + 1}` }]);
    console.log(data);
  };

  return (
    <div>
      <h1>React render here</h1>
      <Chart data={data} addTime={addTime}></Chart>
    </div>
  );
};

export default App;
