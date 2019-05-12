class simpleBarGraph {

	createGraph() {
		const height = 500;
		const width = 500;
		let sample_data = [8.3,5.0,2.1,0.0,0.0,0.0,3.2,6.8,9.1,0.0,1.1,7.9,6.2,2.0,0.0,0.0,0.0,0.0,5.0,5.2,2.1];
		let graph = {
			barWidth: 10,
			fillColour: "#2a7f64",
			x: 10,
			y: 0
		};

		let svg = d3.select("svg");

		// Modify the svg 
		svg.attr('width', width + 'px')
			.attr('height', height + 'px')
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
				return height - d;
			})
			.attr('width', graph.barWidth)
			.attr('height', function(d){
				return d;
			});
	}
}

export const simple_bargraph = new simpleBarGraph();

