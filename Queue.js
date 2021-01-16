let Node = require('./Node')

class Queue {
  constructor(head = null, tail = null) {
    this.head = head
    this.tail = tail
  }

  enqueue(value) {
    let newElem = new Node(value)
    if(this.head === null && this.tail === null) {
      this.head = newElem
      this.tail = newElem
    } else {
      this.tail.next = newElem
      this.tail = newElem
    }
  }

  dequeue() {
    let currentElem = this.head.value
    if(this.head.next === null && this.tail.next === null)
      this.tail = null
    
    this.head = this.head.next
    return currentElem
  }

  peek() {
    return this.head.value
  }

  empty() {
    this.head = null
    this.tail = null
  }
}

let elements = [50, 5, 125]
let queue = new Queue()
console.log('Empty Queue: ', queue)
console.log('Inserting elements to queue: ', elements)
elements.forEach(elem => queue.enqueue(elem))
console.log('Queue after inserting elements: ', queue)
let currentElem = queue.dequeue()
console.log(`Queue after removing ${currentElem}: `, queue)
currentElem = queue.dequeue()
console.log(`Queue after removing ${currentElem}: `, queue)
currentElem = queue.dequeue()
console.log(`Queue after removing ${currentElem}: `, queue)