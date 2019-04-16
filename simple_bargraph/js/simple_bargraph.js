
var sample_data = [8.3,5.0,2.1,0.0,0.0,0.0,3.2,6.8,9.1,0.0,1.1,7.9,6.2,2.0,0.0,0.0,0.0,0.0,5.0,5.2,2.1];
var svg = d3.select("svg");
var x = 10;
var y = 0;
var barwidth = 10;

// Modify the svg 
svg.attr('width', '500px')
	.attr('height', '500px')
	.classed('bargraph', true)
	.style('background-color', 'red');

// Add a bar for each of the sample data values
svg.append('g')
	.attr('fill', 'green')
	.selectAll('rect')
	.data(sample_data)
	.join('rect')
	.attr('x', function(d, i){
		return x * i;
	})
	.attr('y', y)
	.attr('width', barwidth)
	.attr('height', function(d){
		return d * 10;
	});
