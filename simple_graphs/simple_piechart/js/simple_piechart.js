const col_sample_data = [
	{"category": "rent", "cost": 2000},
	{"category": "transportation", "cost": 200},
	{"category": "power", "cost": 100 },
	{"category": "water", "cost": 10},
	{"category": "food", "cost": 300}
];

const margin = {
	"top": 20,
	"right": 20,
	"bottom": 20,
	"left": 30
};

const height = 500 - margin.top - margin.bottom;
const width = 500 - margin.left - margin.right;
const radius = width/2;
const colours = d3.scaleOrdinal(d3.schemeCategory10);

let svg = d3.select('svg');

// Transform center of pie chart to mid point in svg
let container = svg.append('g')
	.classed('container', true)
	.attr("transform", 'translate(' + ((width / 2) + margin.left + margin.right ) + ',' + ((height / 2) + margin.top + margin.bottom) + ')');

// Create d3 pie chart generator
let pie = d3.pie()
	.startAngle(20)
	.value(function(d){
		return d.cost;
	});

// Create d3 arc generator
let arc = d3.arc()
	.innerRadius(0)
	.outerRadius(radius);

function setSVGDimensions(){
	svg.classed('piechart', true)
		.attr('width', (width + margin.left + margin.right) + 'px')
		.attr('height', (height + margin.top + margin.bottom) + 'px');
};

function drawpiechart(){
	setSVGDimensions();

	let arcs = container.selectAll('arc')
		.data(pie(col_sample_data))
		.enter()
		.append('g')
		.classed('arc', true);

	arcs.append('path')
		.attr('fill', function(d, i){
			return colours(i);	
		})
		.attr('d', arc)
		.append('title')
		.text(function(d){
			return d.data.category;	
		});

};

export { drawpiechart };
