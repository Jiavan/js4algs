function Node (element) {
	this.element = element;
	this.next = null;
}
function LinkList () {
	this.head = new Node('head');
}
LinkList.prototype = {
	constructor: LinkList,
	insert: function (target, element) {
		var newNode = new Node(target);
		var current = this.find(element);
		newNode.next = current.next;
		current.next = newNode;
		return this;
	},
	find: function (target) {
		var currentNode = this.head;
		while (currentNode.element !== target) {
			currentNode = currentNode.next;
		}
		return currentNode;
	},
	remove: function (element) {
		var preNode = this.findPrevious(element);
		if (preNode.next !== null) {
			preNode.next = preNode.next.next;
			return true;
		}
		return false;
	},
	findPrevious: function (element) {
		var current = this.head;
		while (current.next !== null && current.next.element !== element) {
			current = current.next;
		}
		return current;
	},
	print: function () {
		var current = this.head.next;
		var str = '';
		while (current) {
			str += current.element + '->';
			current = current.next;
		}
		console.log(str.substr(0, str.length-2));
	}
}

var list = new LinkList();
list.insert('jiavan1', 'head').insert('jiavan2', 'jiavan1').insert('jiavan3', 'jiavan2').insert('jiavan4', 'jiavan3');
list.print();
