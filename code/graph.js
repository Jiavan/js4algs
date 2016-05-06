function Graph (v) {
	this.vertices = v;
	this.edges = 0;
	this.adj = [];
	this.visited = [];
	this.edgeTo = [];

	var i = 0;
	for (; i < this.vertices; i++) {
		this.adj[i] = [];
	}
}
Graph.prototype = {
	constructor: Graph,
	init: function () {
		var i = 0;
		for (; i < this.vertices; i++) {
			this.visited[i] = false;
		}
	},
	addEdge: function (v1, v2) {
		this.adj[v1].push(v2);
		this.adj[v2].push(v1);
		this.edges++;
		return this;
	},
	dfs: function (v) {
		if (v !== undefined) {
			this.init();
			this.visited[v] = true;
			console.log('visited ' + v);
			for (var i = 0; i < this.adj[v].length; i++) {
				if (!this.visited[this.adj[v][i]]) {
					this.dfs(this.adj[v][i]);
				}
			}
		}
	},
	bfs: function (v) {

		// init data
		this.init();
		var i = 0, queue = [], current;
		for (; i < this.vertices; i++) {
			this.visited[i] = false;
		}
		if (this.adj[v] === undefined) {return;}

		queue.push(v);
		this.visited[v] = true;

		while (queue.length > 0) {
			current = queue.shift();
			console.log('visited ' + current);

			for (i = 0; i < this.adj[current].length; i++) {
				if (!this.visited[this.adj[current][i]]) {
					queue.push(this.adj[current][i]);
					this.visited[this.adj[current][i]] = true;
					this.edgeTo[this.adj[current][i]] = current;
				}
			}

			// this.adj[current].forEach(function (x) {
			// 	if (!this.visited[x]) {
			// 		queue.push(x);
			// 		this.visited[x] = true;
			// 	}
			// });
		}
	},
	pathTo: function (v) {
		if (!this.visited[v]) { return };
		var res = '', i, path = [];

		for (i = v; i !== undefined; i = this.edgeTo[i]) {
			path.push(i);
		}

		while (path.length > 0) {
			res += path.pop() + '->';
		}
		return res;
	},
	print: function () {
		var i = 0, j = 0, str = '';
		for (; i < this.vertices; i++) {
			if (this.adj[i] !== undefined) {
				str = '';
				str += i + '->';
				for (j = 0; j < this.adj[i].length; j++) {
					str += this.adj[i][j] + ',';
				}
			}
		}
	}
}



var g = new Graph(11);
g.addEdge(1, 2).addEdge(2, 5).addEdge(2, 6).addEdge(1, 3).addEdge(3, 7).addEdge(3, 8).addEdge(1, 4).addEdge(4, 9).addEdge(4, 10).addEdge(1, 5);
//g.dfs(1);
g.bfs(1);
console.log(g.pathTo(10));