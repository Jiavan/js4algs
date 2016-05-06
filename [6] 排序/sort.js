function CArray (numElements) {
	this.dataStore = [];
	this.pos = 0;
	this.numElements = numElements;

	for (var i = 0; i < this.numElements; i++) {
		this.dataStore[i] = i;
	}
}
CArray.prototype = {
	constructor: CArray,
	setData: function () {
		for (var i = 0; i < this.numElements; i++) {
			this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1) + 100);
		}
	},
	clear: function () {
		for (var i = 0; i < this.numElements; i++) {
			this.dataStore[i] = 0;
		}
	},
	insert: function (element) {
		this.dataStore[this.pos++] = element;
	},
	toString: function () {
		var str = '';
		for (var i = 0; i < this.dataStore.length; i++) {
			str += this.dataStore[i] + ' ';
			if (i > 0 && (i + 1) % 10 === 0) {
				str += '\n';
			}
		}
		return str;
	},
	bubbleSort: function () {
		for (var i = 0; i < this.dataStore.length - 1; i++) {
			for (var j = 0; j < this.dataStore.length - i - 1; j++) {
				if (this.dataStore[j] > this.dataStore[j + 1]) {
					var tmp = this.dataStore[j];
					this.dataStore[j] = this.dataStore[j + 1];
					this.dataStore[j + 1] = tmp;
				}
			}
		}
	}
}

var data = new CArray(100);
data.setData();
data.bubbleSort();
console.log(data.toString());