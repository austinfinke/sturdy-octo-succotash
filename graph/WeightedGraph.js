const Graph = require('./Graph');
const PriorityQueue = require('../queue/PriorityQueue');

class WeightedGraph extends Graph{
  constructor() {
    super();
    this.routeList = {};
  }

  addVertex(v) {
    super.addVertex(v);
  }

  addEdge(v1, v2, distance) {
    this.routeList[v1].push({ item: v2, distance });
    this.routeList[v2].push({ item: v1, distance });
    return this;
  }

  dijkstra(start, end) {
    const stops = new PriorityQueue();
    const distanceTo = {};
    const beenTo = {};

    let shortestTotalDistance = [];
    let shortestPath;

    // setup
    for (let city in this.routeList) {
      if (city === start) {
        distanceTo[city] = 0;
        stops.enqueue(city, 0);
      } else {
        distanceTo[city] = Infinity;
        stops.enqueue(city, Infinity);
      }
      beenTo[city] = null;
    }

    // while items are in priority queue
    while (stops.values.length) {
      shortestPath = stops.dequeue().value;
      if (shortestPath === end) {
        // at destination, build shortest path
        while (beenTo[shortestPath]) {
          shortestTotalDistance.push(shortestPath);
          shortestPath = beenTo[shortestPath];
        }
        break;
      }
      if (shortestPath || distanceTo[shortestPath] !== Infinity) {
        for (let city in this.routeList[shortestPath]) {
          let next = this.routeList[shortestPath][city];
          // distanceTo obj > key = seattle, value = 0 (at seattle) +
          // distance to next city in routelist
          let possibleShortestPath = distanceTo[shortestPath] + next.distance;
          next = next.item;
          if (possibleShortestPath < distanceTo[next]) {
            distanceTo[next] = possibleShortestPath;
            beenTo[next] = shortestPath;
            stops.enqueue(next, possibleShortestPath);
          }
        }
      }
    }
    return shortestTotalDistance.concat(shortestPath).reverse();
  }
}

module.exports = WeightedGraph;
