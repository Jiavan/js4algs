// function CArray (numElements) {
// 	this.dataStore = [];
// 	this.pos = 0;
// 	this.numElements = numElements;

// 	for (var i = 0; i < this.numElements; i++) {
// 		this.dataStore[i] = i;
// 	}
// }
// CArray.prototype = {
// 	constructor: CArray,
// 	setData: function () {
// 		for (var i = 0; i < this.numElements; i++) {
// 			this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1) + 100);
// 		}
// 	},
// 	clear: function () {
// 		for (var i = 0; i < this.numElements; i++) {
// 			this.dataStore[i] = 0;
// 		}
// 	},
// 	insert: function (element) {
// 		this.dataStore[this.pos++] = element;
// 	},
// 	toString: function () {
// 		var str = '';
// 		for (var i = 0; i < this.dataStore.length; i++) {
// 			str += this.dataStore[i] + ' ';
// 			if (i > 0 && (i + 1) % 10 === 0) {
// 				str += '\n';
// 			}
// 		}
// 		return str;
// 	},
// 	bubbleSort: function () {
// 		for (var i = 0; i < this.dataStore.length - 1; i++) {
// 			for (var j = 0; j < this.dataStore.length - i - 1; j++) {
// 				if (this.dataStore[j] > this.dataStore[j + 1]) {
// 					var tmp = this.dataStore[j];
// 					this.dataStore[j] = this.dataStore[j + 1];
// 					this.dataStore[j + 1] = tmp;
// 				}
// 			}
// 		}
// 	},
// 	selectSort: function () {
// 		var pos = 0, i = 0, j = 0, tmp;

// 		for (i = 0; i < this.dataStore.length; i++) {
// 			pos = i;
// 			for (j = i; j < this.dataStore.length; j++) {
// 				if (this.dataStore[pos] > this.dataStore[j]) {
// 					pos = j;
// 				}
// 			}

// 			tmp = this.dataStore[pos];
// 			this.dataStore[pos] = this.dataStore[i];
// 			this.dataStore[i] = tmp;
// 		}
// 	},
// 	selectSortB: function () {
// 		var pos = 0, i = 0, data = [];

// 		start = new Date().getTime();
// 		while (this.dataStore.length > 0) {
// 			pos = 0;
// 			for (i = 0; i < this.dataStore.length; i++) {
// 				if (this.dataStore[pos] > this.dataStore[i]) {
// 					pos = i;
// 				}
// 			}
// 			data.push(this.dataStore[pos]);
// 			this.dataStore.splice(pos, 1);
// 		}
// 		this.dataStore = data;
// 	},
// 	bucketSort: function () {
// 		var i = 0, j = 0, bucket = [], max = this.dataStore[0];

// 		for (; i < this.dataStore.length; i++) {
// 			if (max < this.dataStore[i]) {
// 				max = this.dataStore[i];
// 			}
// 		}

// 		for (i = 0; i < max; i++) {
// 			bucket[i] = 0;
// 		}

// 		for (i = 0; i < this.dataStore[i]; i++) {
// 			bucket[this.dataStore[i]]++;
// 		}

// 		this.dataStore.length = 0;
// 		for (i = 0; i < bucket.length; i++) {
// 			if (bucket[i] !== 0) {
// 				for (j = 0; j < bucket[i]; j++) {
// 					this.dataStore.push(i);
// 				}
// 			}
// 		}
// 	},
// 	qSort: function (arr) {
// 		var i, pivot, left = [], right = [];

// 		if (arr.length <= 1) { return arr; }
// 		pivot = arr.splice(0, 1)[0];
// 		for (i = 0; i < arr.length; i++) {
// 			if (arr[i] < pivot) {
// 				left.push(arr[i]);
// 			} else {
// 				right.push(arr[i]);
// 			}
// 		}

// 		return this.qSort(left).concat([pivot], this.qSort(right));
// 	},
// 	sort: function () {
// 		this.dataStore.sort(function (a, b) {
// 			return a - b;
// 		});
// 	},
// 	quickSort: function (left, right) {
// 		var i, j, t, pivot;

// 		pivot = this.dataStore[left];
// 		if (left > right) { return; }

// 		i = left, j = right;
// 		while (i !== j) {
// 			while (this.dataStore[j] >= pivot && i < j) { j--; }
// 			while (this.dataStore[i] <= pivot && i < j) { i++; }

// 			if (i < j) {
// 				t = this.dataStore[i];
// 				this.dataStore[i] = this.dataStore[j];
// 				this.dataStore[j] = t;
// 			}
// 		}

// 		this.dataStore[left] = this.dataStore[i];
// 		this.dataStore[i] = pivot;

// 		this.quickSort(left, i - 1);
// 		this.quickSort(i + 1, right);
// 	}
// }

// var data = new CArray(100000), start, end;
// data.setData();
// //console.log(data.toString());
// start = new Date().getTime();
// //data.dataStore = data.qSort(data.dataStore);
// data.bubbleSort();
// //data.selectSort();
// //data.sort();
// //data.qSort(this.dataStore);
// //data.quickSort(0, data.dataStore.length - 1);
// end = new Date().getTime();
// //console.log(data.toString());
// console.log(end - start);



function quickSort(left, right, arr) {
	if (left > right) { return; }

	var i, j, t, pivot;
	i = left;
	j = right;
	pivot = arr[left];

	while (i !== j) {
		while (arr[j] >= pivot && i < j) { j--; }
		while (arr[i] <= pivot && i < j) { i++; }

		if (i < j) {
			t = arr[i];
			arr[i] = arr[j];
			arr[j] = t;
		}
	}

	arr[left] = arr[i];
	arr[i] = pivot;
	quickSort(left, i - 1, arr);
	quickSort(i + 1, right, arr);
}
var arr = [2, 4, 6, 5, 7, 8, 9, 1, 0];
quickSort(0, arr.length - 1, arr);
console.log(arr.toString());