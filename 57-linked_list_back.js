// Create a standalone function that accepts a
// listNode pointer and returns the last value in the
// linked list.
// Page 83, back

class Node{
    constructor(data, next){
        this.data = data;
        this.next = next;
    }
}

class linkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    insertFront(data){
        this.head = new Node(data, this.head);
        this.size++;
    }
}

function back(node){
    let current = node.head;
    let lastVal = 0;
    let index = 0;

    while(current){
        if(index === node.size - 1){
            lastVal = current.data;
        }
        current = current.next;
        index++;
    }

    return lastVal;
}

let ll = new linkedList();
ll.insertFront(100);
ll.insertFront(20);
ll.insertFront(300);
ll.insertFront(40);
ll.insertFront(500);

console.log(back(ll));