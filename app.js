const LinkedList  = require('./linkedList')

const ll = LinkedList.fromValues(10,20,30,40) 
ll.print()  // 10 -> 20 -> 30 -> 40 -> null

console.log(ll.getByIndex(0).value) // 10
console.log(ll.getByIndex(2).value) // 30

ll.insertAtIndex(2, 50)
ll.print()

ll.removeHead()
ll.print()

ll.removeAtIndex(2)
ll.print()

//const ll = new LinkedList()

//ll.insertAtHead(10)
//console.log(ll)
/*
> node app.js

LinkedList {
  head: LinkedListNode { value: 10, next: null },
  length: 1
}
*/

//ll.insertAtHead(20)

//console.log(ll)
/*
> node app.js

LinkedList {
  head: LinkedListNode {
    value: 20,
    next: LinkedListNode { value: 10, next: null }
  },
  length: 2
}
*/

