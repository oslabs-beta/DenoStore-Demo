import * as React from 'react';
import BarChart from './BarChart';
import { addTimeType } from '../../types';

const DemoVisualization: React.FC = () => {
  const [data, setData] = React.useState([]);

  const addTime: addTimeType = (time: number) => {
    setData([...data, { time, queryCountName: `Query ${data.length + 1}` }]);
    console.log(data);
  };
  return (
    <div className="demoVisualization">
      <BarChart addTime={() => addTime((Math.random() * 10) / 2)} data={data} />
    </div>
  );
};

export default DemoVisualization;
