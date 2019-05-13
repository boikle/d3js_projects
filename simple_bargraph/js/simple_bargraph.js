class simpleBarGraph {

	createGraph() {
		const height = 500;
		const width = 500;
		const fillColour = "#2A7F64";

		let sample_data = [8.3,5.0,2.1,0.0,0.0,0.0,3.2,6.8,9.1,0.0,1.1,7.9,6.2,2.0,0.0,0.0,0.0,0.0,5.0,5.2,2.1];

		let bandWidth = width / sample_data.length;

		let scaleX = d3.scaleLinear()
			.domain([d3.min(sample_data), d3.max(sample_data)])
			.range([0, width]);
	
		let scaleY = d3.scaleLinear()
			.domain([d3.min(sample_data), d3.max(sample_data)])
			.range([height, 0]);

		let svg = d3.select("svg");

		// Modify the svg 
		svg.attr('width', width + 'px')
			.attr('height', height + 'px')
			.classed('bargraph', true);
		
		// Add a bar for each of the sample data values
		svg.append('g')
			.attr('fill', fillColour)
			.selectAll('rect')
			.data(sample_data)
			.join('rect')
			.attr('x', function(d,i){
				return i * bandWidth;
			})
			.attr('y', function(d){
				return scaleY(d);
			})
			.attr('width', bandWidth)
			.attr('height', function(d){
				return height - scaleY(d);
			});
	}
}

export const simple_bargraph = new simpleBarGraph();

