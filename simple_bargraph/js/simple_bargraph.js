import { randomDataGenerator } from './random_data_generator.js';

// simpleBarGraph - generates a bar-graph 
class simpleBarGraph {

	createGraph() {
		let sampleData = randomDataGenerator();
		let margin = {
			"top": 20,
			"right": 20,
			"bottom": 20,
			"left": 30
		};
		let height = 400 - margin.top - margin.bottom;
		let width = 800 - margin.left - margin.right;
		let barPadding = 1;
		let fillColour = "#2A7F64";

		let bandWidth = width / sampleData.length;

		let scaleX = d3.scaleLinear()
			.domain([0, sampleData.length])
			.range([0, width]);
	
		let scaleY = d3.scaleLinear()
			.domain([d3.min(sampleData), d3.max(sampleData)])
			.range([height, 0]);

		let xAxis = g => g
			.attr('transform', 'translate(' + margin.left + ',' + (height + margin.bottom) + ')')
			.call(d3.axisBottom().ticks(10).scale(scaleX));

		let yAxis = g => g
			.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
			.call(d3.axisLeft().ticks(5).scale(scaleY));

		let svg = d3.select("svg");

		// Modify the svg 
		svg.attr('width', (width + margin.left + margin.right) + 'px')
			.attr('height', (height + margin.top + margin.bottom) + 'px')
			.classed('bargraph', true);
		
		// Add a bar for each of the sample data values
		svg.append('g')
			.attr('fill', fillColour)
			.selectAll('rect')
			.data(sampleData)
			.join('rect')
			.attr('x', function(d,i){
				return i * bandWidth + margin.left + barPadding;
			})
			.attr('y', function(d){
				return scaleY(d) + margin.top;
			})
			.attr('width', bandWidth - barPadding)
			.attr('height', function(d){
				return height - scaleY(d);
			});

		// Add x axis
		svg.append('g')
			.call(xAxis);

		// Add y axis
		svg.append('g')
			.call(yAxis);
	}
}

export const simple_bargraph = new simpleBarGraph();

