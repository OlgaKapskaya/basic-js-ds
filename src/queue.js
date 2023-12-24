const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
    this.body = null;
  }

  isEmpty() {
    return !this.head;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    const newNode = new ListNode(value);

    if (this.isEmpty()) {
      this.head = newNode;
      this.body = newNode;
    } else {
      this.body.next = newNode;
      this.body = newNode;
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }

    const removedNode = this.head;
    this.head = this.head.next;

    if (this.head === null) {
      this.body = null;
    }

    return removedNode.value;
  }
}

module.exports = {
  Queue
};
