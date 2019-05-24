// Regenerate Data Control
export function generatorBtn(graph) {
	let controlPanel = document.getElementById('control_panel'); 
	let button = document.createElement('button');
	button.setAttribute('type','button');
	button.textContent = 'Re-generate Data';
	button.addEventListener('click', function(){
		graph.regenData();
		graph.draw();
	});

	if (controlPanel) {
		controlPanel.appendChild(button);
	}
}

// Sort Data
export function sortBtn(graph) {
	let controlPanel = document.getElementById('control_panel'); 
	let button = document.createElement('button');
	button.setAttribute('type','button');
	button.textContent = 'Sort Data';
	button.addEventListener('click', function(){
		graph.sortData();
		graph.draw();
	});

	if (controlPanel) {
		controlPanel.appendChild(button);
	}
}

