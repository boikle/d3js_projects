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
		this.sampleData = randomDataGenerator();
		this.bandWidth = this.width / this.sampleData.length;

		this.svg = d3.select("svg")
			.attr('width', (this.width + this.margin.left + this.margin.right) + 'px')
			.attr('height', (this.height + this.margin.top + this.margin.bottom) + 'px')
			.classed('bargraph', true);

		this.scaleX = d3.scaleLinear()
			.domain([0, this.sampleData.length])
			.range([0, this.width]);
	
		this.scaleY = d3.scaleLinear()
			.domain([d3.min(this.sampleData), d3.max(this.sampleData)])
			.range([this.height, 0]);

		this.colourScale = d3.scaleSequential(d3.interpolateBlues);

		this.xAxis = g => g
			.attr('transform', 'translate(' + this.margin.left + ',' + (this.height + this.margin.bottom) + ')')
			.call(d3.axisBottom().ticks(10).scale(this.scaleX));

		this.yAxis = g => g
			.attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')')
			.call(d3.axisLeft().ticks(5).scale(this.scaleY));

		// Add x axis
		this.svg.append('g')
			.call(this.xAxis);

		// Add y axis
		this.svg.append('g')
			.call(this.yAxis);

		// Add container for bars
		this.svg.append('g')
			.attr('id', 'bar_container');
	}

	regenData() {
		this.sampleData = randomDataGenerator();
	}

	sortData() {
		this.sampleData = this.sampleData.sort();
	}

	draw() {
		let _this = this;

		// Select all rectangles
		let bars = d3.select('#bar_container')
			.selectAll('rect')
			.data(this.sampleData);

		// Enter selection and add/update rectangles
		bars.enter()
			.append('rect')
			.merge(bars)
			.transition()
			.attr('fill', function(d){
				return _this.colourScale(d);
			})
			.attr('x', function(d,i){
				return i * _this.bandWidth + _this.margin.left + _this.barPadding;
			})
			.attr('y', function(d){
				return _this.scaleY(d) + _this.margin.top;
			})
			.attr('width', this.bandWidth - this.barPadding)
			.attr('height', function(d){
				return _this.height - _this.scaleY(d);
			});

		// Exit and remove old bars
		bars.exit().remove();
	}
}

export const simple_bargraph = new simpleBarGraph();

