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

LinkedList.prototype.addAtTail = function (val) {
    let newNode = new Node(val);
    if (this.head === null) {
        this.head = newNode;
    }
    let curr = this.head;
    while (curr.next !== null) {
        curr = curr.next;
    }
    curr.next = newNode;
    this.size++;
};

LinkedList.prototype.addAtIndex = function (index, val) {
    let newNode = new Node(val);
    if (index < 0 || index > this.size) return;
    if (index === 0) return this.addAtHead(val);
    if (index === this.size) return this.addAtTail(val);

    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
        curr = curr.next;
    }
    newNode.next = curr.next;
    curr.next = newNode;
    this.size++;
};

LinkedList.prototype.getValueByIndex = function (index) {
    if (index < 0 || index > this.size) return;
    let curr = this.head;
    for (let i = 0; i < index; i++) {
        curr = curr.next;
    }
    return curr.val;
}

LinkedList.prototype.deleteAtIndex = function (index) {
    if (index < 0 || index >= this.size) return;
    if (index === 0) {
        this.head = this.head.next;
    }
    else {
        let curr = this.head;
        for (let i = 0; i < index - 1; i++) {
            curr = curr.next;
        }
        curr.next = curr.next.next;
    }

    this.size--;
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
list.addAtHead(1);
list.addAtTail(100);
list.addAtIndex(2, 121);
list.deleteAtIndex(0);
console.log(list.getValueByIndex(2));

list.print();
console.log("Size:", list.size);
