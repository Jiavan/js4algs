栈是一种先进后出(LIFO)的数据结构，我们所能操作的都是栈顶元素，删除一个栈顶元素叫做**出栈**或者**弹栈**，添加一个元素叫做**入栈**或者**压栈**.

![stack.png](stack.png)

# ADT
首先构建我们的抽象数据类型.
```javascript
Stack
top // 栈顶元素
dataStore //保存数据的数组
push // 压栈
pop // 出栈
peek // 查看栈顶元素
empty // 清空栈
length // 栈的长度
print // 输出栈元素
```

# Javascript 描述
```javascript
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
    // 模拟输出栈结构
	print: function () {
		for (var i = this.length() - 1; i >= 0; i--) {
			console.log(this.dataStore[i] + '\n');
		}
	}
}
```

# 测试
```javascript
var stack = new Stack();
// 入栈
stack.push('jiavan');
stack.push('jiavan2');
stack.push('jiavan3');
stack.push('jiavan4');

// jiavan4
// jiavan3
// jiavan2
// jiavan
stack.print();

// jiavan4
stack.pop();
// jiavan3
stack.peek();
// 3
stack.top;
// jiavan3
// jiavan2
// jiavan
stack.print();
```

# 应用
对num数进行n进制的转换，大致算法如下：
- 对num和n进行求余和想除取整
- 将余数入栈push
- 回到第一步直至除到值为0

```javascript
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

// transformNum(10, 2)， 1010
// transformNum(10, 8)， 12
```
栈的应用还有很多，比如匹配括号以及表达式求值等等.