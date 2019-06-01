import { randomPointGenerator } from './random_point_generator.js';

const margin = {
	"top": 20,
	"right": 20,
	"bottom": 20,
	"left": 30
}

const height = 400 - margin.top - margin.bottom;
const width = 800 - margin.left - margin.right;

let data = randomPointGenerator()

function getXValue(d){
	if (d.hasOwnProperty('x')) {
		return d.x;
	}
}

function getYValue(d){
	if (d.hasOwnProperty('y')) {
		return d.y;
	}
}

function draw(){ 
	let svg = d3.select("svg")
		.attr('width', (width + margin.left + margin.right) + 'px')
		.attr('height', (height + margin.top + margin.bottom) + 'px')
		.classed('scatter-plot', true);
	
	let scaleX = d3.scaleLinear()
		.domain([d3.min(data, getXValue), d3.max(data, getYValue)])
		.range([0, width]);
	
	let scaleY = d3.scaleLinear()
		.domain([d3.min(data, getXValue), d3.max(data, getYValue)])
		.range([height, 0]);
	
	let xAxis = g => g
		.attr('transform', 'translate(' + margin.left + ',' + (height + margin.bottom) + ')')
		.call(d3.axisBottom().ticks(10).scale(scaleX));
	
	let yAxis = g => g
		.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
		.call(d3.axisLeft().ticks(5).scale(scaleY));
	
	// Add x axis
	svg.append('g')
		.call(xAxis);
	
	// Add y axis
	svg.append('g')
		.call(yAxis);
}

export { draw };

