function Stack () {
	this.top = 0;
	this.dataStore = [];
}
Stack.prototype = {
	constructor: Stack,
	push: function (element) {
		return this.dataStore[this.top++] = element;
	},
	pop: function () {
		return this.dataStore.length ? 
				this.dataStore.splice(--this.top, 1) :
				false;
	},
	peek: function () {
		return this.dataStore[this.top - 1];
	},
	empty: function () {
		this.dataStore,length = 0;	
	},
	length: function () {
		return this.dataStore.length;
	},
	print: function () {
		for (var i = this.length() - 1; i >= 0; i--) {
			console.log(this.dataStore[i] + '\n');
		}
	}
}

var stack = new Stack();
stack.push('jiavan');
stack.push('jiavan2');
stack.push('jiavan3');
stack.push('jiavan4');
stack.print();
stack.pop();
stack.peek();
stack.top;
stack.print();

function transformNum(num, base) {
	var res = parseInt(num / base);
	var stack = new Stack();
	stack.push(num % base);
	while (parseInt(res)) {
		stack.push(parseInt(res % base));
		res /= base;
	}
	stack.print();
}