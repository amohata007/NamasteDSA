function Node(val) {
    this.val = val;
    this.next = null;
}

function LinkedList() {
    this.head = null;
    this.size = 0;
}

LinkedList.prototype.addAtHead = function (val) {
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
};

LinkedList.prototype.midPoint = function (head){
    let slow = head;
    let fast = head;

    while(fast!=null && fast.next!=null){
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;

}

LinkedList.prototype.print = function () {
    let res = [];
    let curr = this.head;
    while (curr !== null) {
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

list.print();
console.log("Size:", list.size);

console.log("Mid:", list.midPoint(list.head));
