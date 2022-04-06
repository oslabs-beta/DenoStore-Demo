import * as React from 'react';
import * as d3 from 'd3';
import { ChartPropsData } from '../types';

//this component loads a chart based on state handed down from the container component
//ChartPropsData takes in a queryFetchTime as time and a string of a query number
export const Chart: React.FC<ChartPropsData> = ({
  data,
  addTime,
}: ChartPropsData) => {
  const [selection, setSelection] = React.useState(null);
  const svgRef = React.useRef<SVGSVGElement | null>(null);

  const width = 600;
  const height = 400;
  const margin = { top: 20, right: 10, bottom: 20, left: 50 };

  const svgWidth = width + margin.left + margin.right;
  const svgHeight = height + margin.top + margin.bottom;

  React.useEffect(() => {
    if (!selection) {
      setSelection(d3.select(svgRef.current));
    } else {
      const xScale = d3
        .scaleBand()
        .domain(data.map((d) => d.queryCountName))
        .range([margin.left + 5, svgWidth - margin.right - margin.left])
        .paddingInner(0.1);

      const yScale = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d.time) + 1])
        .range([svgHeight + 5, margin.bottom]);

      const yAxis = d3.axisLeft(yScale).tickFormat((d) => `${d} secs`);
      const xAxis = d3.axisBottom(xScale);

      const xAxisGroup = selection
        .append('g')
        .attr('transform', `translate(0, ${svgHeight})`)
        .call(xAxis);

      const yAxisGroup = selection
        .append('g')
        .attr('transform', `translate(${margin.left}, 0)`)
        .call(yAxis);

      const update = selection
        .selectAll('rect')
        .data(data)
        .enter()
        .append('rect')
        .attr('width', xScale.bandwidth)
        .attr('height', (d) => svgHeight - yScale(d.time))
        .attr('x', (d) => xScale(d.queryCountName))
        .attr('y', (d) => yScale(d.time))
        .attr('fill', 'royalblue');
    }
  }, [svgRef.current]);

  React.useEffect(() => {
    if (selection) {
      const xScale = d3
        .scaleBand()
        .domain(data.map((d) => d.queryCountName))
        .range([margin.left + 5, width - margin.right])
        .paddingInner(0.1);

      const yScale = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d.time) + 1])
        .range([svgHeight + 5, margin.bottom]);

      const xAxis = d3.axisBottom(xScale);

      const xAxisGroup = selection
        .append('g')
        .attr('transform', `translate(0, ${svgHeight})`)
        .call(xAxis);

      const rects = selection.selectAll('rect').data(data);

      rects.exit().remove();

      rects
        .attr('width', xScale.bandwidth)
        .attr('height', (d) => svgHeight - yScale(d.time))
        .attr('x', (d) => xScale(d.queryCountName))
        .attr('y', (d) => yScale(d.time))
        .attr('fill', 'royalblue');

      rects
        .enter()
        .append('rect')
        .attr('width', xScale.bandwidth)
        .attr('height', (d) => svgHeight - yScale(d.time))
        .attr('x', (d) => xScale(d.queryCountName))
        .attr('y', (d) => yScale(d.time))
        .attr('fill', 'royalblue');
    }
  }, [data]);

  return (
    <div>
      <svg
        className="d3-component"
        width={svgWidth}
        height={svgHeight}
        ref={svgRef}
      />
      <br />
      <button onClick={() => addTime(0.8)}></button>
    </div>
  );
};
