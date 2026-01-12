function reverseLL() {
    prev = null;
    curr = this.head;

    while (curr !== null) {

        temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;

    }
    this.head = prev;
    return this.head;
}