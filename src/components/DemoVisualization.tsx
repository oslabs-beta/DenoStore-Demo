import * as React from 'react';
import BarChart from './BarChart';

const DemoVisualization: React.FC = () => {
  const [data, setData] = React.useState([]);

  const addTime = (time: number): void => {
    setData([...data, { time, queryCountName: `Query ${data.length + 1}` }]);
    console.log(data);
  };

  return (
    <div className="demoVisualization">
      <BarChart data={data} />
      <button
        id="d3-button"
        onClick={() => addTime((Math.random() * 10) / 2)}
      ></button>
    </div>
  );
};

export default DemoVisualization;
