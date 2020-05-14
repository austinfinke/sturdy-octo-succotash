const WeightGraph = require('./graph/WeightedGraph');

let wg = new WeightGraph();
wg.addVertex('Seattle');
wg.addVertex('Spokane');
wg.addVertex('Olympia');
wg.addVertex('Richland');
wg.addVertex('Ellensburg');
wg.addVertex('WallaWalla');
console.log(wg.routeList);

wg.addEdge('Seattle', 'Spokane', 5);
wg.addEdge('Seattle', 'Olympia', 3);
wg.addEdge('Olympia', 'Ellensburg', 3);
wg.addEdge('Olympia', 'Richland', 5);
wg.addEdge('Spokane', 'WallaWalla', 4);
wg.addEdge('Richland', 'WallaWalla', 2);
wg.addEdge('Richland', 'Ellensburg', 1);
wg.addEdge('WallaWalla', 'Ellensburg', 1);
console.log(wg.routeList);
console.log(wg.dijkstra('Seattle', 'Richland'));




