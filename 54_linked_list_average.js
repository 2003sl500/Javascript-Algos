// Create a standalone function average(node)​ that returns (…wait for it … ) the average of all values
// contained in that list.
// Page 81, average

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
        this.size++;
    }
}

function average(arr){
    let ll = new LinkedList();
    for(let i = 0; i < arr.length; i++){
        ll.insertFirst(arr[i]);
    }

    let len = ll.size;
    let sum = 0;
    let avg = 0;
    let current = ll.head;

    while(current){
        console.log(current.data);
        sum += current.data;
        current = current.next;
    }
    
    avg = sum / len;
    console.log();
    console.log("avg: " + avg);
}

average([100,200,300,400,500,600,700,800]);