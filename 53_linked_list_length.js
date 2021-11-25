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
    insertFirst(data) {
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
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertFirst(400);

console.log("Length: " + ll.len());