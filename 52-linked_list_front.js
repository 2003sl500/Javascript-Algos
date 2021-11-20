// Return the value (not the node) at the head of the
// list. If list is empty, return null.
// Page 80, front

class Node {
    constructor(data, next = null) {
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
        this.size++;
    }

    returnFrontVal(){
        if(!this.head){
            return "no data";
        }
        return this.head.data;
    }
}

let ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertFirst(400);

console.log(ll.returnFrontVal());