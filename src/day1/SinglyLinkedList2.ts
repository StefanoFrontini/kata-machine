type LinkedListNode<T> = {
    data: T;
    next_node: LinkedListNode<T> | undefined;
};
class SinglyLinkedList2<T> {
    private head: LinkedListNode<T> | undefined;

    constructor(node: LinkedListNode<T>) {
        this.head = node;
    }
    createNode(value: T) {
        const newNode: LinkedListNode<T> = {
            data: value,
            next_node: undefined,
        };
        return newNode;
    }
    read(index: number): T | undefined {
        if (!this.head) {
            return undefined;
        }
        let current_node = this.head;
        let current_index = 0;
        while (current_index < index) {
            if (!current_node.next_node) {
                return undefined;
            }
            current_node = current_node.next_node;
            current_index++;
        }
        return current_node.data;
    }
    index_of(value: T): number | undefined {
        if (!this.head) {
            return undefined;
        }
        let current_node: LinkedListNode<T> | undefined = this.head;
        let current_index = 0;
        while (current_node) {
            if (current_node.data === value) {
                return current_index;
            }
            current_node = current_node.next_node;
            current_index++;
        }
        return undefined;
    }
    insert_at_index(index: number, value: T): void {
        const newNode = this.createNode(value);

        if (index === 0) {
            const head = this.head;
            newNode.next_node = head;
            this.head = newNode;
            return;
        }
        let current_node = this.head;
        if (!current_node) {
            throw new Error("list is empty");
        }
        let current_index = 0;
        while (current_index < index - 1) {
            if (!current_node || !current_node.next_node) {
                throw new Error("index out of bound");
            }
            current_node = current_node.next_node;
            current_index++;
        }
        newNode.next_node = current_node?.next_node;
        current_node.next_node = newNode;
    }
    delete_at_index(index: number): void {
        if (!this.head) {
            throw new Error("list is empty");
        }
        if (index === 0) {
            const head = this.head;
            this.head = head.next_node;
            return;
        }
        let current_node = this.head;
        if (!current_node) {
            throw new Error("list is empty");
        }
        let current_index = 0;
        while (current_index < index - 1) {
            if (!current_node || !current_node.next_node) {
                throw new Error("index out of bound");
            }
            current_node = current_node.next_node;
            current_index++;
        }
        current_node.next_node = current_node.next_node?.next_node;
    }
    print_list() {
        let current_node = this.head;
        while (current_node) {
            console.log(current_node.data);
            current_node = current_node.next_node;
        }
    }
    get_last_element(): T | undefined {
        if (!this.head) {
            return undefined;
        }
        let current_node = this.head;
        while (current_node.next_node) {
            current_node = current_node.next_node;
        }
        return current_node.data;
    }
    list_reverse() {
        if (!this.head) {
            throw new Error("list is empty");
        }
        const old_list = this.head;
        this.head = undefined;

        let current_node: LinkedListNode<T> | undefined = old_list;
        do {
            this.insert_at_index(0, current_node.data);

            current_node = current_node.next_node;
        } while (current_node);
    }
    list_reverse2() {
        if (!this.head) {
            throw new Error("list is empty");
        }
        let prev = undefined;
        let current: LinkedListNode<T> | undefined = this.head;
        while (current) {
            let next: LinkedListNode<T> | undefined = current.next_node;
            current.next_node = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }
    delete_node(node: LinkedListNode<T>) {
        let current: LinkedListNode<T> | undefined = node;
        if (!current || !current.next_node) {
            current = undefined;
            return;
        }
        current.data = current.next_node.data;
        current.next_node = current.next_node.next_node;
    }
}

const node1: LinkedListNode<number> = { data: 5, next_node: undefined };
const node2: LinkedListNode<number> = { data: 10, next_node: undefined };

node1.next_node = node2;
const list = new SinglyLinkedList2(node1);
// console.log(list.read(0));
// console.log(list.read(1));
// console.log(list.read(2));
// console.log(list.index_of(10));
list.insert_at_index(2, 12);
list.delete_at_index(1);
list.insert_at_index(2, 18);
console.log("🚀 ~ list:", JSON.stringify(list, null, 2));
// list.print_list();
// const lastElement = list.get_last_element();
// console.log("🚀 ~ lastElement:", lastElement);
// list.list_reverse();
// list.print_list();
list.list_reverse2();
list.print_list();
