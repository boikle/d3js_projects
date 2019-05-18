import { randomDataGenerator } from './random_data_generator.js';

// simpleBarGraph - generates a bar-graph 
class simpleBarGraph {

	constructor() {
		this.margin = {
			"top": 20,
			"right": 20,
			"bottom": 20,
			"left": 30
		};

		this.height = 400 - this.margin.top - this.margin.bottom;
		this.width = 800 - this.margin.left - this.margin.right;
		this.barPadding = 1;
		this.fillColour = "#2A7F64";
	}

	createGraph() {
		let _this = this;
		let sampleData = randomDataGenerator();

		let bandWidth = this.width / sampleData.length;

		let scaleX = d3.scaleLinear()
			.domain([0, sampleData.length])
			.range([0, this.width]);
	
		let scaleY = d3.scaleLinear()
			.domain([d3.min(sampleData), d3.max(sampleData)])
			.range([this.height, 0]);

		let xAxis = g => g
			.attr('transform', 'translate(' + this.margin.left + ',' + (this.height + this.margin.bottom) + ')')
			.call(d3.axisBottom().ticks(10).scale(scaleX));

		let yAxis = g => g
			.attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')')
			.call(d3.axisLeft().ticks(5).scale(scaleY));

		let svg = d3.select("svg");

		// Modify the svg 
		svg.attr('width', (this.width + this.margin.left + this.margin.right) + 'px')
			.attr('height', (this.height + this.margin.top + this.margin.bottom) + 'px')
			.classed('bargraph', true);
		
		// Add a bar for each of the sample data values
		svg.append('g')
			.attr('fill', this.fillColour)
			.selectAll('rect')
			.data(sampleData)
			.join('rect')
			.attr('x', function(d,i){
				return i * bandWidth + _this.margin.left + _this.barPadding;
			})
			.attr('y', function(d){
				return scaleY(d) + _this.margin.top;
			})
			.attr('width', bandWidth - _this.barPadding)
			.attr('height', function(d){
				return _this.height - scaleY(d);
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

