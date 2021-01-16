let Node = require('./Node')

class Stack {
  constructor() {
    this.top = new Node()
  }

  push(value) {
    if (this.top.value === null) this.top.value = value
    else {
      let newElem = new Node(value)
      newElem.next = this.top
      this.top = newElem
    }
  }

  pop() {
    let stackElem = this.top.value
    this.top = this.top.next
    return stackElem
  }

  empty() {
    this.top = new Node()
  }

  peek() {
    return this.top.value
  }
}

let elements = [50, 5, 125]
console.log('Implementing Stacks using Linked List:')
let stack = new Stack()
console.log('Empty Stack: ', stack)
console.log('Pushing these into stack: ', elements)
elements.forEach(elem => stack.push(elem))
console.log('Filled stack: ', stack)
console.log('Removing from stack:')
console.log('Peeking current value in stack:', stack.peek())
let popped = stack.pop()
console.log(`Stack now after removing ${popped}: `, stack)
console.log('Peeking current value in stack:', stack.peek())
popped = stack.pop()
console.log(`Stack now after removing ${popped}: `, stack)