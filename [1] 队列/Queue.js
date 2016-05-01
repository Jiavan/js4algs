function Queue () {
	this.length = 0;
	this.dataStore = [];
}
Queue.prototype = {
	constructor: Queue,
	enQueue: function (element) {
		this.dataStore[this.length++] = element;
	},
	delQueue: function () {
		var res = this.dataStore[0],
			i;

		if (res !== undefined) {
			if (this.length > 1) {
				for (i = 0; i < this.length - 1; i++) {
					this.dataStore[i] = this.dataStore[i + 1];
				}
				this.dataStore.length -= 1;
			} else {
				this.dataStore = [];
			}
			this.length -= 1;
		}

		return res;
	},
	empty: function () {
		this.dataStore.length = 0;
		this.length = 0;
	},
	front: function () {
		return this.dataStore[0];
	},
	rear: function () {
		return this.dataStore[this.length - 1];
	},
	print: function () {
		for (var i = 0; i < this.length; i++) {
			console.log(this.dataStore[i] + '\n');
		}
	}
}

var q = new Queue();
q.enQueue('jiavan');
q.enQueue('jiavan2');
q.enQueue('jiavan3');
q.enQueue('jiavan4');
q.print();
q.delQueue(); // jiavan
q.length; // 3
q.front(); //jiavan2
q.rear();// jiavan4
q.empty();
q.dataStore; //[]