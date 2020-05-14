class Graph {
  constructor() {
    this.routeList = {};
  }

  addVertex(v) {
    if (!this.routeList[v])
      this.routeList[v] = []
  }

  addEdge(v1, v2) {
    this.routeList[v1].push(v2);
    this.routeList[v2].push(v1);
    return this;
  }

  removeEdge(v1, v2) {
    this.routeList[v1] = this.routeList[v1].filter(
      v => v !== v2
    );
    this.routeList[v2] = this.routeList[v2].filter(
      v => v !== v1
    );
  }

  removeVertex(v) {
    while (this.routeList[v].length) {
      const adjacentVertex = this.routeList[v].pop();
      this.removeEdge(v, adjacentVertex);
    }
    delete this.routeList[v]
  }
}

module.exports = Graph;