import React, { useRef } from 'react';
import d3 from 'd3';

/*
we'll need a state hook so that when a new query time is available, it gets passed
down as data (either prop drilling or using context, probably the latter) to get 
a new bar added to the chart. 

*/

const Chart = ({ data }) => {
  const svgRef = useRef(null);
  const width = 600;
  const height = 300;
  const margin = { top: 30, right: 30, bottom: 30, left: 60 };

  const svgWidth = width + margin.left + margin.right;
  const svgHeight = height + margin.top + margin.bottom;

  useEffect(() => {});
};

export default Chart;
