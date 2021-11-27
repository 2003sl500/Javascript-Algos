// Create a function that accepts a pointer to first list node, and returns number of nodes in sList.
// Page 81, length

class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // insert at first position
    insertFront(data) {
        this.head = new Node(data, this.head);
    }

    len(data){
        let current = this.head;
        while(current){
            this.size++;
            current = current.next;
        }
        return this.size;
    }
}

let ll = new LinkedList();
ll.insertFront(100);
ll.insertFront(200);
ll.insertFront(300);
ll.insertFront(400);

console.log("Length: " + ll.len());