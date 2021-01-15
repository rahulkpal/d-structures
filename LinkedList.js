let Node = require('./Node')

class LinkedList {
  constructor(values) {
    this.head = new Node()
    if (values && values.length) values.forEach(value => this.addNode(value))
  }

  addNode(value) {
    if (!this.head.value) this.head = new Node(value)
    else {
      let current = this.head
      while (current.next) {
        current = current.next
      }

      current.next = new Node(value)
    }
  }

  getNode(value) {
    let current = this.head
    if (current.value === value) return current
    else {
      while (current.next) {
        current = current.next
        if (current && current.value === value) return current
      }

      return null
    }
  }

  kickNode(value) {
    let current = this.head, prev = null
    if (current.value === value) this.head = new Node()
    else {
      while (current.next) {
        prev = current
        current = current.next
        if (current.value === value) {
          prev.next = current.next
          return this.head
        }
      }
    }

    return this.head
  }
}

let llArray = [50, 5, 55]
console.log('Making a new Linked List with: ', llArray)
let ll = new LinkedList(llArray)
console.log('Linked List: ', ll)
console.log('Retrieving node with value = 5 : ', ll.getNode(5))
console.log('Kick a node with value = 55: ', ll.kickNode(55))