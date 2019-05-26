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
let svg = d3.select('svg');

function setSVGDimensions(){
	svg.classed('piechart', true)
		.attr('width', (width + margin.left + margin.right) + 'px')
		.attr('height', (height + margin.top + margin.bottom) + 'px');
};

function drawpiechart(){
	setSVGDimensions();
};

export { drawpiechart };
