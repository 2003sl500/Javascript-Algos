// Create display(node)​ for debugging that returns a string containing all list values. Build what you wish
// console.log(myList)​ did!
// Page 82, display

class Node{
    constructor(data, next){
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
    insertFront(data){
        this.head = new Node(data, this.head);
    }
}

function display(node){
    let arr = [];
    let current = node.head;
    let arrString = "";
    let stringIndex = 0;

    while(current){
        arr.push(current.data);
        current = current.next;
    }

    for(x of arr){
        if(stringIndex === 0){
            arrString += x;
            stringIndex++;
        } else {
            arrString += " , " + x;
            stringIndex++;
        }
    }

    console.log(arrString);
}

let ll = new LinkedList();
ll.insertFront(100);
ll.insertFront(200);
ll.insertFront(300);
ll.insertFront(400);

display(ll);