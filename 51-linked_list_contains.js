// Given a pointer to a listNode and a value, return
// whether value is found in any node within the list.
// Page 80, contains

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

    contains(val){
        let count = 0;
        let current = this.head;
        console.log("looking for " + val);
        console.log(current);
        while(current){
            if(current.data === val){
                console.log("found " + val + " at index " + count);
            } 
            current = current.next;
            count++;
        }
    }

}

let ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);

// console.log(ll);

ll.contains(200);