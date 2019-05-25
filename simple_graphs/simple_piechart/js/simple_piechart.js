const margin = {
	"top": 20,
	"right": 20,
	"bottom": 20,
	"left": 30
};

const height = 400 - margin.top - margin.bottom;
const width = 800 - margin.left - margin.right;
let svg = d3.select('svg');

function drawpiechart(){
	// set dimensions for svg
	svg.classed('piechart', true)
		.attr('width', (width + margin.left + margin.right) + 'px')
		.attr('height', (height + margin.top + margin.bottom) + 'px');
};

export { drawpiechart };
