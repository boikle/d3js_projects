import { randomPointGenerator } from './random_point_generator.js';

const margin = {
	"top": 20,
	"right": 20,
	"bottom": 20,
	"left": 30
}

const min = 0; 
const max = 100;
const height = 400 - margin.top - margin.bottom;
const width = 800 - margin.left - margin.right;
const radius = 5;

let data = randomPointGenerator()

let svg = d3.select("svg")
	.attr('width', (width + margin.left + margin.right) + 'px')
	.attr('height', (height + margin.top + margin.bottom) + 'px')
	.classed('scatter-plot', true);

let scaleX = d3.scaleLinear()
	.domain([min, max])
	.range([0, width]);

let scaleY = d3.scaleLinear()
	.domain([min, max])
	.range([height, 0]);

let xAxis = g => g
	.attr('transform', 'translate(' + margin.left + ',' + (height + margin.top) + ')')
	.call(d3.axisBottom().ticks(10).scale(scaleX));

let yAxis = g => g
	.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
	.call(d3.axisLeft().ticks(5).scale(scaleY));

function draw(){ 
	// Add x axis
	svg.append('g')
		.call(xAxis);
	
	// Add y axis
	svg.append('g')
		.call(yAxis);

	// Add points to graph
	let points = svg.selectAll('circle')
		.data(data);

	points.enter()
		.append('circle')
		.merge(points)
		.transition()
		.attr('r', radius)
		.attr('cx', function(d){
			return scaleX(d.x) + margin.left;
		})
		.attr('cy', function(d){
			return scaleY(d.y) + margin.top ;
		})
		.attr('fill', 'darkcyan')
		.attr('stroke', 'black')
		.attr('datat', function(d){
			return '['+d.x+' ,'+d.y+']';	
		});
}

export { draw };

