type NodeDoublyLinkedList<T> = {
    data: T;
    next_node: NodeDoublyLinkedList<T> | undefined;
    prev_node: NodeDoublyLinkedList<T> | undefined;
};
class DoublyLinkedList<T> {
    private head: NodeDoublyLinkedList<T> | undefined;
    private tail: NodeDoublyLinkedList<T> | undefined;

    constructor(head: NodeDoublyLinkedList<T>, tail: NodeDoublyLinkedList<T>) {
        this.head = head;
        this.tail = tail;
    }
    print_list() {
        let current_node = this.head;
        while (current_node) {
            console.log(current_node.data);
            current_node = current_node.next_node;
        }
    }
    print_list_reverse() {
        let current_node = this.tail;
        while (current_node) {
            console.log(current_node.data);
            current_node = current_node.prev_node;
        }
    }
}

const nodeLinkedList1: NodeDoublyLinkedList<number> = {
    data: 5,
    next_node: undefined,
    prev_node: undefined,
};
const nodeLinkedList2: NodeDoublyLinkedList<number> = {
    data: 10,
    next_node: undefined,
    prev_node: undefined,
};

nodeLinkedList1.next_node = nodeLinkedList2;
nodeLinkedList2.prev_node = nodeLinkedList1;
const listDoubly = new DoublyLinkedList<number>(
    nodeLinkedList1,
    nodeLinkedList2,
);
listDoubly.print_list();
listDoubly.print_list_reverse();
