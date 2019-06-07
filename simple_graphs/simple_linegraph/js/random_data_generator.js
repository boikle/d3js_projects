// linearDataset - generates a random dataset
// Option: sampleSize - defines the dataset size (default = 30)
export function linearDataset(sampleSize = 30) {
	let x, y;
	let dataset = [];

	if (sampleSize > 0) {
		for (x = 0; x < sampleSize; x += 1){
			dataset.push({'x': x, 'y': linear(x)});
		}
	}
	return dataset;
}

function linear(x) {
	let m = 1;
	let b = 0;
	let y = (m * x) + b;
	return y;
}
