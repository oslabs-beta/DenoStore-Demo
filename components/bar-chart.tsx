import * as React from 'react';
import * as d3 from 'd3';

/*
we'll need a state hook so that when a new query time is available, it gets passed
down as data (either prop drilling or using context, probably the latter) to get 
a new bar added to the chart. 

*/

type ChartPropsData = { data?: number[] };

// export const Chart: React.FC<ChartPropsData> = ({ data }: ChartPropsData):JSX.Element => {
// doesn't recognize JSX.Element even though I see it everywhere online. Can't get div return to not lint as "wrong"

export const Chart: React.FC<ChartPropsData> = ({ data }: ChartPropsData) => {
  const [chartData, setChartData] = React.useState(data);

  const svgRef = React.useRef(null);
  const width = 600;
  const height = 300;
  const margin = { top: 20, right: 20, bottom: 20, left: 20 };

  const svgWidth = width + margin.left + margin.right;
  const svgHeight = height + margin.top + margin.bottom;

  /* The useEffect Hook is for running side effects outside of React,
       for instance inserting elements into the DOM using D3 */
  React.useEffect(
    () => {
      if (chartData && svgRef.current) {
        const svg = d3.select(svgRef.current);

        const x = d3
          .scaleBand()
          .domain(d3.range(chartData.length))
          .range([margin.left, width - margin.right])
          .padding(0.1);

        const y = d3
          .scaleLinear()
          .domain([0, d3.max(chartData, (d) => d)])
          .range([height - margin.bottom, margin.top]);

        //bind d3 data
        const update = svg
          .append('g')
          .attr('fill', 'royalblue')
          .selectAll('rect')
          .data(chartData)

          //enter new d3 elements
          // update
          //   .enter()
          .join('rect')
          .attr('x', (d, i) => x(i))
          .attr('y', (d) => y(d))
          .attr('height', (d) => y(0) - y(d))
          .attr('width', x.bandwidth());

        // const xAxis = (g: any) => {
        //   g.attr('transform', `translate(0, ${height - margin.bottom})`).call(
        //     d3
        //       .axisBottom(x)
        //       .tickFormat((i) => `Query ${i}`)
        //       .attr('font-size', '20px')
        //   );
        // };
        // const yAxis = (g: any) => {
        //   g.attr('transform', `translate(${margin.left}, 0)`).call(
        //     d3.axisLeft(y).ticks(null, chartData.format)
        //   );
        // };

        // update.append('g').call(xAxis);
        // update.append('g').call(yAxis);

        //update existing d3 elements and render
        update.node();
        // update.exit().remove();

        // // Bind D3 data
        // const update = svg.append('g').selectAll('text').data(data);

        // // Enter new D3 elements
        // update
        //   .enter()
        //   .append('text')
        //   .attr('x', (d, i) => i * 25)
        //   .attr('y', 40)
        //   .style('font-size', 24)
        //   .text((d: number) => d);

        // // Update existing D3 elements
        // update.attr('x', (d, i) => i * 40).text((d: number) => d);

        // // Remove old D3 elements
        // update.exit().remove();
      }
    },

    /*
            useEffect has a dependency array (below). It's a list of dependency
            variables for this useEffect block. The block will run after mount
            and whenever any of these variables change. We still have to check
            if the variables are valid, but we do not have to compare old props
            to next props to decide whether to rerender.
        */
    [chartData, svgRef.current]
  );

  return (
    <svg
      className="d3-component"
      width={svgWidth}
      height={svgHeight}
      ref={svgRef}
    />
  );
};
