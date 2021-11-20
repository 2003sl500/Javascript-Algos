// Given a pointer to the first node in a list, and a
// value, create a new node, connect it to the head
// of the list, and return a pointer to the list’s new
// head node
// Page 80, addFront

class Node{
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    // insert at first position
    insertFirst(data){
        this.head = new Node(data, this.head);
        this.size++;
      
    }
}

let ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);

console.log(ll);