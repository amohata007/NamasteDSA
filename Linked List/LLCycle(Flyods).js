//Slow and Fast Pointer
//Flyod's ALgo

function cycle(head){
    //empty case
    if(head===null) return false;
    let slow = head;
    let fast = head.next;

    while(slow!=fast){
        if(fast==null || fast.next==null){
          return false;
        }
          slow = slow.next;
            fast = fast.next.next;
        
    }
    return true;
}