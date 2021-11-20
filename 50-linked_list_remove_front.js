// Given a pointer to the first node in a list, remove
// the head node and return the new list. If list is
// empty, return null.
// Page 80, removeFront

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

    // if empty, put in front
    removeFront(){
        this.head = this.head.next;
        this.size--;
    }
    
}

let ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);

console.log(ll);
console.log();

ll.removeFront();

console.log(ll);