
var sample_data = [8.3,5.0,2.1,0.0,0.0,0.0,3.2,6.8,9.1,0.0,1.1,7.9,6.2,2.0,0.0,0.0,0.0,0.0,5.0,5.2,2.1];
var svg = d3.select("svg");
var graph = {
	svgHeight: 500,
	svgWidth: 500,
	barWidth: 10,
	fillColour: "#2a7f64",
	x: 10,
	y: 0
};

// Modify the svg 
svg.attr('width', graph.svgWidth + 'px')
	.attr('height', graph.svgHeight + 'px')
	.classed('bargraph', true);

// Add a bar for each of the sample data values
svg.append('g')
	.attr('fill', graph.fillColour)
	.selectAll('rect')
	.data(sample_data)
	.join('rect')
	.attr('x', function(d, i){
		return graph.x * i;
	})
	.attr('y', function(d){
		return graph.svgHeight - d;
	})
	.attr('width', graph.barWidth)
	.attr('height', function(d){
		return d;
	});
