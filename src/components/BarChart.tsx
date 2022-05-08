import * as React from 'react';
import * as d3 from 'd3';
import { ChartPropsData } from '../../types';

//this component loads a chart based on state handed down from the container component
// ChartPropsData takes in a queryFetchTime as time and a string 'Query #'
const BarChart: React.FC<ChartPropsData> = ({
  data,
}: ChartPropsData | null) => {
  const [selection, setSelection] = React.useState(null);
  const svgRef = React.useRef<SVGSVGElement | null>(null);

  // needed scaling info for d3
  let width;
  const height = 385;
  const margin = { top: 20, right: 10, bottom: 20, left: 50 };
  if (window.innerWidth <= 600) {
    width = window.innerWidth * 0.71;
  } else {
    width = 600;
  }

  const svgWidth = width + margin.left + margin.right;
  const svgHeight = height + margin.top + margin.bottom;

  /*
  Sets initial selection and scale empty with no query data yet
  */
  React.useEffect(() => {
    // sets state with the ref to the SVG
    if (!selection) {
      setSelection(d3.select(svgRef.current));
    } else {
      // sets scale to initial data
      const xScale = d3
        .scaleBand()
        .domain(data.map((d) => d.queryCountName))
        .range([margin.left + 5, svgWidth - margin.right - margin.left])
        .padding(0.1);

      const yScale = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d.time) + 0.5])
        .nice()
        .range([svgHeight - margin.bottom, margin.top]);

      // scales X and Y axis and adds each to chart
      const yAxis = d3.axisLeft(yScale).tickFormat((d) => `${d} ms`);
      const xAxis = d3.axisBottom(xScale);

      const xAxisGroup = selection
        .append('g')
        .attr('class', 'x-axis')
        .attr('transform', `translate(0, ${svgHeight - margin.bottom})`)
        .call(xAxis);

      const yAxisGroup = selection
        .append('g')
        .attr('class', 'y-axis')
        .attr('transform', `translate(${margin.left}, 0)`)
        .call(yAxis);

      // adds bars to chart based on scaled data points
      const update = selection
        .selectAll('rect')
        .data(data)
        .enter()
        .append('rect')
        .attr('width', xScale.bandwidth)
        .attr('height', (d) => svgHeight - yScale(d.time) - margin.bottom)
        .attr('x', (d) => xScale(d.queryCountName))
        .attr('y', (d) => yScale(d.time))
        .attr('fill', '#43d1f4');
    }
  }, [svgRef.current]);

  /* 
    Listens for a state change to the data props (aka a new query's result time).
    Updates scales, removes old bars, recreates and appends bars with updated data.
  */
  React.useEffect(() => {
    if (selection) {
      // remove prior X & Y axis with old ticks
      d3.selectAll('.x-axis').remove();
      d3.selectAll('.y-axis').remove();

      // reset the chart scales to the new updated data
      const xScale = d3
        .scaleBand()
        .domain(data.map((d) => d.queryCountName))
        .range([margin.left, width - margin.right])
        .padding(0.1);

      const yScale = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d.time) + 1])
        .range([svgHeight - margin.bottom, margin.top]);

      // create a new xAxis scale and add the axis to the chart
      const xAxis = d3.axisBottom(xScale);
      const yAxis = d3.axisLeft(yScale).tickFormat((d) => `${d} ms`);

      const xAxisGroup = selection
        .append('g')
        .attr('class', 'x-axis')
        .attr('transform', `translate(0, ${svgHeight - margin.bottom})`)
        .call(xAxis)
        .selectAll('text');

      const yAxisGroup = selection
        .append('g')
        .attr('class', 'y-axis')
        .attr('transform', `translate(${margin.left}, 0)`)
        .call(yAxis);

      // remove all prior bars
      const rects = selection.selectAll('rect').data(data);
      rects.exit().remove();

      // create bars for the chart and append them to the graph
      rects
        .attr('width', xScale.bandwidth)
        .attr('x', (d) => xScale(d.queryCountName))
        .attr('height', (d) => svgHeight - yScale(d.time) - margin.bottom)
        .attr('y', (d) => yScale(d.time))
        .attr('fill', '#43d1f4');

      rects
        .enter()
        .append('rect')
        .attr('width', xScale.bandwidth)
        .attr('x', (d) => xScale(d.queryCountName))
        .attr('y', svgHeight - margin.bottom)
        .attr('height', 0)
        .attr('fill', '#130080')
        .transition()
        .duration(1000)
        .ease(d3.easeExpIn)
        .ease(d3.easeBounce)
        .attr('height', (d) => svgHeight - yScale(d.time) - margin.bottom)
        .attr('y', (d) => yScale(d.time))
        .attr('fill', '#43d1f4');
    }
  }, [data]);

  return (
    <div className="demoVisualization">
      <svg
        className="d3-component"
        width={svgWidth}
        height={svgHeight}
        ref={svgRef}
      />
    </div>
  );
};

export default BarChart;
