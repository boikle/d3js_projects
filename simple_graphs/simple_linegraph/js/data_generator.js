// datasetGenerator - generates a dataset
// Option:
//  - fName - function name used to generator data (e.g. linear)
//  - sampleSize - defines the dataset size (default = 30)
export function datasetGenerator(fName, sampleSize = 30) {
	let x, y;
	let dataset = [];

	if (sampleSize > 0) {
		for (x = 0; x < sampleSize; x += 1){
			dataset.push({'x': x, 'y': fName(x)});
		}
	}
	return dataset;
}

export function linear(x) {
	let m = 1;
	let b = 0;
	let y = (m * x) + b;
	return y;
}

export function exponential(x) {
	let m = 2;
	let y = Math.pow(m,x);
	return y;
}
