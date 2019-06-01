// randomPointGenerator - generates a random dataset
// Option: sampleSize - defines the dataset size (default = 50)
function randomPointGenerator(sampleSize = 50) {
	let i, x, y;
	let max = 100;
	let dataset = [];

	if (sampleSize > 0) {
		for (i = 0; i < sampleSize; i += 1){
			x = Math.floor(Math.random() * max);
			y = Math.floor(Math.random() * max);
			dataset.push({"x": x, "y": y});
		}
	}
	return dataset;
}

export { randomPointGenerator };
