// Create a function that creates a listNode with
// given value and inserts it at end of a linked list.
// Page 83, addBack

class Node{
    constructor(data, next = null){
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

    insertBack(data){
       let node = new Node(data);
       let current;

       if(!this.head){
           this.head = node;
       } else {
           current = this.head;

           while(current.next){
               current = current.next;
           }

           current.next = node;
       }
       this.size++;
    }
}

function display(node){
    let current = node.head;
    let nodeString = "";
    let index = 0;

    while(current){
        if(index === 0){
            nodeString += current.data;
        } else {
            nodeString += " , " + current.data;
        }
        current = current.next;
        index++;
    }

    return nodeString;
}

let ll = new linkedList();
ll.insertFront(100);
ll.insertFront(50);
ll.insertFront(200);
ll.insertFront(125);

ll.insertBack(75);
ll.insertBack(25);

ll.insertFront(325);

console.log(display(ll));