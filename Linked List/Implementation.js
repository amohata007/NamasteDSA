function Node(val) {
    this.val = val;
    this.next = null;
}

function LinkedList() {
    this.head = null;
    this.size = 0;
}

LinkedList.prototype.addAtHead = function(val) {
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
};

LinkedList.prototype.addAtTail = function(val) {
    let newNode = new Node(val);
    if(this.head===null){
        this.head = newNode;
    }
    let curr = this.head;
    while(curr.next!==null){
        curr = curr.next;
    }
    curr.next = newNode;
    this.size++;
};

LinkedList.prototype.print = function() {
    let res=[];
    let curr = this.head;
    while(curr!==null){
        res.push(curr.val);
        curr = curr.next;
    }
    console.log(res.join('->'));
};

// TEST
const list = new LinkedList();
list.addAtHead(10);
list.addAtHead(20);
list.addAtHead(30);
list.addAtHead(1);
list.addAtTail(100);

list.print();
console.log("Size:", list.size);
