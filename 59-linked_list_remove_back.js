// Create a standalone function that removes the
// last listNode in the list and returns the new list
// Page 83, removeBack

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

    insertFront(data){
        this.head = new Node(data, this.head);
        this.size++;
    }

}

function removeBack(node){
    let current = node.head;
    let index = 0;

    while(current){
        if(index === node.size - 2){
            console.log("Removed: " + current.next.data);
            current.next = null;
        }

        current = current.next;
        index++;
        
    }

    return node;
}

function display(node){
    let nodeString = "";
    let current = node.head;
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

let ll = new LinkedList();
ll.insertFront(23);
ll.insertFront(125);
ll.insertFront(250);
ll.insertFront(50);
ll.insertFront(75);

console.log(removeBack(ll));

ll.insertFront(134);

console.log(display(ll));