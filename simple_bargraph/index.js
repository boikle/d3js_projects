import { simple_bargraph } from './js/simple_bargraph.js';
import { generatorBtn, sortBtn } from './js/control_panel.js';

// Add bar-graph
simple_bargraph.draw();

// Add re-gen button
generatorBtn(simple_bargraph);

// Add sort button
sortBtn(simple_bargraph);

