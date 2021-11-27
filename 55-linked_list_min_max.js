// Create function min(node)​ and max(node)​ to returning smallest and largest values in the list.
// Page 82, min, max

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
        this.size++;
    }
}

function min(node) {
    if (node.head === null) {
        console.log("this list is empty");
        console.log(node);
    } else if (node.size === 1){
        console.log("There is only 1 node in the list");
        console.log(node.head);
    } else {
        let minNode = node.head.data;
        let current = node.head;

        while(current){
            console.log(current.data);
            if(current.data < minNode){
                minNode = current.data;
            }
            current = current.next;
        }
    
        console.log();
        console.log("min: " + minNode);
    }
}

function max(node) {
    if (node.head === null) {
        console.log("this list is empty");
        console.log(node);
    } else if (node.size === 1){
        console.log("There is only 1 node in the list");
        console.log(node.head);
    } else {
        let maxNode = node.head.data;
        let current = node.head;

        while(current){
            console.log(current.data);
            if(current.data > maxNode){
                maxNode = current.data;
            }
            current = current.next;
        }
    
        console.log();
        console.log("max: " + maxNode);
    }
}

let ll = new LinkedList();
ll.insertFront(10);
ll.insertFront(50);
ll.insertFront(5);
ll.insertFront(40);

min(ll);
max(ll);