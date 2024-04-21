// ..........................................problem.......................................//

// 1. Implement a singly linked list.
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Add element to the end of the list
    append(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }

        this.size++;
    }

    // Insert element at a specific position
    insertAt(data, index) {
        if (index < 0 || index > this.size) {
            return false;
        }

        const newNode = new Node(data);
        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            let current = this.head;
            let prev = null;
            let i = 0;
            while (i < index) {
                prev = current;
                current = current.next;
                i++;
            }
            newNode.next = current;
            prev.next = newNode;
        }

        this.size++;
        return true;
    }

    // Remove element at a specific position
    removeAt(index) {
        if (index < 0 || index >= this.size) {
            return null;
        }

        let current = this.head;
        let prev = null;
        let i = 0;
        if (index === 0) {
            this.head = current.next;
        } else {
            while (i < index) {
                prev = current;
                current = current.next;
                i++;
            }
            prev.next = current.next;
        }

        this.size--;
        return current.data;
    }

    // Get element at a specific position
    getAt(index) {
        if (index < 0 || index >= this.size) {
            return null;
        }

        let current = this.head;
        let i = 0;
        while (i < index) {
            current = current.next;
            i++;
        }

        return current.data;
    }

    // Display the list
    display() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}


const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.insertAt(4, 1); // Insert 4 at index 1
linkedList.removeAt(2); // Remove element at index 2
linkedList.display(); // Output the list


// 2. Implement a stack using an array.

class Stack {
    constructor() {
        this.items = [];
    }

    // Push element onto the stack
    push(element) {
        this.items.push(element);
    }

    // Pop element from the stack
    pop() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items.pop();
    }

    // Peek at the top element of the stack
    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[this.items.length - 1];
    }

    // Check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Return the size of the stack
    size() {
        return this.items.length;
    }

    // Clear the stack
    clear() {
        this.items = [];
    }

    // Print the stack
    print() {
        console.log(this.items.toString());
    }
}


const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.print(); // Output: 1,2,3
console.log(stack.peek()); // Output: 3
console.log(stack.pop()); // Output: 3
stack.print(); // Output: 1,2
console.log(stack.isEmpty()); // Output: false
console.log(stack.size()); // Output: 2
stack.clear();
console.log(stack.isEmpty()); // Output: true


// 3. Implement a queue using a linked list.

class Nodes {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    // Add element to the rear of the queue
    enqueue(data) {
        const newNode = new Nodes(data);
        if (!this.front) {
            this.front = newNode;
            this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.size++;
    }

    // Remove and return element from the front of the queue
    dequeue() {
        if (!this.front) {
            return null;
        }
        const removedNode = this.front;
        this.front = this.front.next;
        if (!this.front) {
            this.rear = null;
        }
        this.size--;
        return removedNode.data;
    }

    // Peek at the element from the front of the queue
    peek() {
        return this.front ? this.front.data : null;
    }

    // Check if the queue is empty
    isEmpty() {
        return this.size === 0;
    }

    // Return the size of the queue
    getSize() {
        return this.size;
    }

    // Display the queue
    display() {
        let current = this.front;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}


const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.display(); // Output: 1 2 3
console.log(queue.dequeue()); // Output: 1
console.log(queue.peek()); // Output: 2
console.log(queue.isEmpty()); // Output: false
console.log(queue.getSize()); // Output: 2


// 4. Write a function to reverse a linked list.

class Nodee {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function reverseLinkedList(head) {
    let prev = null;
    let current = head;
    let next = null;

    while (current) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev; // new head of the reversed list
}



// Create a sample linked list
const head = new Nodee(1);
head.next = new Nodee(2);
head.next.next = new Nodee(3);
head.next.next.next = new Nodee(4);

console.log("Original list:");
let current = head;
while (current) {
    console.log(current.data);
    current = current.next;
}

const reversedHead = reverseLinkedList(head);

console.log("Reversed list:");
current = reversedHead;
while (current) {
    console.log(current.data);
    current = current.next;
}

// 5. Write a function to check if a linked list contains a cycle.

class Nodey {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function hasCycle(head) {
    if (!head || !head.next) {
        return false;
    }

    let slow = head;
    let fast = head.next;

    while (fast && fast.next) {
        if (slow === fast) {
            return true; // Cycle detected
        }
        slow = slow.next;
        fast = fast.next.next;
    }

    return false; // No cycle detected
}



// Create a sample linked list with a cycle
const headd = new Nodey(1);
headd.next = new Nodey(2);
headd.next.next = new Nodey(3);
headd.next.next.next = new Nodey(4);
headd.next.next.next.next = headd.next; // creating a cycle

console.log(hasCycle(headd)); // Output: true
