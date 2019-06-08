import { datasetGenerator, linear, exponential } from './data_generator.js';

const margin = {
	"top": 20,
	"right": 20,
	"bottom": 20,
	"left": 30
}

const height = 400 - margin.top - margin.bottom;
const width = 800 - margin.left - margin.right;

let linearData = datasetGenerator(linear)
let exponentialData = datasetGenerator(exponential)

let svg = d3.select("svg")
	.attr('width', (width + margin.left + margin.right) + 'px')
	.attr('height', (height + margin.top + margin.bottom) + 'px')
	.classed('line-graph', true);

let scaleX = d3.scaleLinear()
	.domain([d3.min(linearData, getXValue), d3.max(linearData, getXValue)])
	.range([0, width]);

let scaleY = d3.scaleLinear()
	.domain([d3.min(linearData, getYValue), d3.max(linearData, getYValue)])
	.range([height, 0]);

let xAxis = g => g
	.attr('transform', 'translate(' + margin.left + ',' + (height + margin.top) + ')')
	.call(d3.axisBottom().ticks(10).scale(scaleX));

let yAxis = g => g
	.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
	.call(d3.axisLeft().ticks(5).scale(scaleY));

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
	// Add x axis
	svg.append('g')
		.call(xAxis);
	
	// Add y axis
	svg.append('g')
		.call(yAxis);

}

export { draw };
