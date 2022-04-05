import * as React from 'react';
import * as d3 from 'd3';
import { ChartPropsData } from '../types';

export const Chart: React.FC<ChartPropsData> = ({
  data,
  addTime,
}: ChartPropsData) => {
  const [chartData, setChartData] = React.useState(data);

  const svgRef = React.useRef<SVGSVGElement | null>(null);
  const width = 600;
  const height = 400;
  const margin = { top: 20, right: 20, bottom: 20, left: 20 };

  const svgWidth = width + margin.left + margin.right;
  const svgHeight = height + margin.top + margin.bottom;

  const x = d3
    .scaleBand()
    .domain(chartData.map((d) => d.queryCountName))
    .range([margin.left, width - margin.right])
    .padding(0.075);

  const y = d3
    .scaleLinear()
    .domain([0, d3.max(chartData, (d) => d.time)])
    .range([height - margin.bottom, margin.top]);

  const yAxis = d3.axisLeft(y);
  const xAxis = d3.axisBottom(x);
  /* The useEffect Hook is for running side effects outside of React,
    for instance inserting elements into the DOM using D3 */
  React.useEffect(() => {
    if (chartData && svgRef.current) {
      const svg = d3.select(svgRef.current);

      const xAxisGroup = svg.append('g').call(xAxis);

      const yAxisGroup = svg.append('g').call(yAxis);

      const update = svg
        .append('g')
        .attr('transform', `translate(${margin.left}, 0)`)
        .selectAll('rect')
        .data(chartData)
        .enter()
        .append('rect')
        .attr('width', x.bandwidth)
        .attr('x', (d) => x(d.queryCountName))
        .attr('fill', 'royalblue')
        .attr('height', (d) => y(0) - y(d.time));
    }
  }, [chartData, svgRef.current]);

  return (
    <div>
      <svg
        className="d3-component"
        width={svgWidth}
        height={svgHeight}
        ref={svgRef}
      />
      <button onClick={() => addTime(1.3)}></button>
    </div>
  );
};
