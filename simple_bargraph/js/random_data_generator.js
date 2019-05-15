// randomDataGenerator - generates a random dataset
// Option: sampleSize - defines the dataset size (default = 30)
function randomDataGenerator(sampleSize = 30) {
	let i;
	let dataset = [];

	if (sampleSize > 0) {
		for (i = 0; i < sampleSize; i += 1){
			dataset.push(Math.random());
		}
	}
	return dataset;
}

export { randomDataGenerator };
