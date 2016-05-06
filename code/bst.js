function Node (data) {
	this.data = data;
	this.left = this.right = null;
}
function BST (data, left, right) {
	this.root = null;
}
BST.prototype = {
	constructor: BST,
	insert: function (data) {
		var newNode = new Node(data), parent, current = this.root;
		if (this.root === null) {
			this.root = newNode;
		} else {
			while (true) {
				parent = current;
				if (current.data > data) {
					current = current.left;
					if (current === null) {
						parent.left = newNode;
						break;
					}
				} else {
					current = current.right;
					if (current === null) {
						parent.right = newNode;
						break;
					}
				}
			}
		}
		return this;
	},
	inOrder: function (node) {
		if (node !== null) {
			this.inOrder(node.left);
			this.print(node);
			this.inOrder(node.right);
		}
	},
	preOrder: function (node) {
		if (node !== null) {
			this.print(node);
			this.preOrder(node.left);
			this.preOrder(node.right);
		}
	},
	postOrder: function (node) {
		if (node !== null) {
			this.postOrder(node.left);
			this.postOrder(node.right);
			this.print(node);
		}
	},
	getMax: function () {
		var current = this.root;
		if (this.root !== null) {
			while (current.right !== null) {
				current = current.right;
			}
			return current.data;
		}
		return null;
	},
	getMin: function () {
		var current = this.root;
		if (this.root !== null) {
			while (current.left !== null) {
				current = current.left;
			}
			return current.data;
		}
		return null;
	},
	find: function (data) {
		var current = this.root;
		if (this.root !== null) {
			while (current !== null) {
				if (current.data === data) {
					return true;
				} else {
					if (current.data > data) {
						current = current.left;
					} else {
						current = current.right;
					}
				}
			}
			return false;
		}
	},
	print: function (node) {
		console.log(node.data + '\n');
	}
}

var bst = new BST();
bst.insert(3).insert(2).insert(4).insert(9).insert(1).insert(8).insert(0).insert(10);
//bst.insert(23).insert(16).insert(45).insert(3).insert(22).insert(37).insert(99);
//bst.postOrder(bst.root);
console.log(bst.getMin(), bst.getMax());
console.log(bst.find(30));