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
const radius = 3;
const labelPadding = 3;

let data = randomPointGenerator()

let svg = d3.select("svg")
	.attr('width', (width + margin.left + margin.right) + 'px')
	.attr('height', (height + margin.top + margin.bottom) + 'px')
	.classed('scatter-plot', true);
	
// Add groups for points
let pointsGroup = svg.append('g')
	.classed('points', true);

let toolTip = d3.select('body')
	.append('div')
	.attr('id', 'tooltip');

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

function calcRadius(data){
	var weightedAvg, radius;
	var minRadius = 4;
	var maxRadius = 10;
	if (data.x && data.y) {
		weightedAvg = ((data.x / 100) * 0.5) + ((data.y / 100) * 0.5);
		radius = weightedAvg * maxRadius;
		return radius < minRadius ? minRadius : radius;
	}
}

function showToolTip(text, coords){
	var offset = 15;
	toolTip.text(text)
		.style('opacity', 1)
		.style('left', coords[0] + offset + 'px')
		.style('top', coords[1] - offset + 'px');
}

function hideToolTip(){
	toolTip.style('opacity', 0);
}

function draw(){ 
	// Add x axis
	svg.append('g')
		.call(xAxis);
	
	// Add y axis
	svg.append('g')
		.call(yAxis);

	// Add points
	let points = pointsGroup.selectAll('circle')
		.data(data);

	points.enter()
		.append('circle')
		.merge(points)
		.attr('r', function(d){
			return calcRadius(d);
		})
		.attr('cx', function(d){
			return scaleX(d.x) + margin.left;
		})
		.attr('cy', function(d){
			return scaleY(d.y) + margin.top;
		})
		.attr('fill', 'darkcyan')
		.attr('stroke', 'black')
		.on('mousemove', function(d){
			let coords = d3.mouse(this);
			let label = d.x + ' ,' + d.y;
			showToolTip(label, coords);
		})
		.on('mouseout', hideToolTip);
}

export { draw };

