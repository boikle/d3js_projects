import { randomDataGenerator } from './random_data_generator.js';

// simpleBarGraph - generates a bar-graph 
class simpleBarGraph {

	createGraph() {
		let sample_data = randomDataGenerator();
		let margin = {
			"top": 20,
			"right": 20,
			"bottom": 20,
			"left": 20
		};
		let height = 400 - margin.top - margin.bottom;
		let width = 800 - margin.left - margin.right;
		let fillColour = "#2A7F64";

		let bandWidth = width / sample_data.length;

		let scaleX = d3.scaleLinear()
			.domain([d3.min(sample_data), d3.max(sample_data)])
			.range([0, width]);
	
		let scaleY = d3.scaleLinear()
			.domain([d3.min(sample_data), d3.max(sample_data)])
			.range([height, 0]);

		let svg = d3.select("svg");

		// Modify the svg 
		svg.attr('width', (width + margin.left + margin.right) + 'px')
			.attr('height', (height + margin.top + margin.bottom) + 'px')
			.classed('bargraph', true);
		
		// Add a bar for each of the sample data values
		svg.append('g')
			.attr('fill', fillColour)
			.selectAll('rect')
			.data(sample_data)
			.join('rect')
			.attr('x', function(d,i){
				return i * bandWidth + margin.left;
			})
			.attr('y', function(d){
				return scaleY(d) + margin.top;
			})
			.attr('width', bandWidth)
			.attr('height', function(d){
				return height - scaleY(d);
			});
	}
}

export const simple_bargraph = new simpleBarGraph();

