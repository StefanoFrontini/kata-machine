type Node<T> = {
    value: T;
    next: Node<T> | undefined;
    prev: Node<T> | undefined;
};
export default class DoublyLinkedList<T> {
    public length: number;
    private head: Node<T> | undefined;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    createNode(item: T): Node<T> {
        const newNode = {
            value: item,
            next: undefined,
            prev: undefined,
        };
        return newNode;
    }

    prepend(item: T): void {
        const n = this.createNode(item);
        if (this.head === undefined) {
            this.head = n;
        } else {
            const old_list = this.head;
            n.next = old_list;
            old_list.prev = n;
            this.head = n;
        }
        this.length++;
    }
    insertAt(item: T, idx: number): void {
        const n = this.createNode(item);
        if (idx > this.length - 1) {
            console.log("index is out of bounds");
            return;
        }
        if (idx === 0) {
            this.prepend(item);
        } else {
            for (
                let node: Node<T> | undefined = this.head, i = 0;
                node !== undefined;
                node = node.next, i++
            ) {
                if (i === idx - 1) {
                    const next = node.next;
                    node.next = n;
                    n.next = next;
                    n.prev = node;
                    if (next !== undefined) {
                        next.prev = n;
                    }
                    this.length++;
                }
            }
        }
    }
    append(item: T): void {
        const n = this.createNode(item);
        if (this.head == undefined) {
            this.prepend(item);
        } else {
            for (
                let node: Node<T> | undefined = this.head;
                node != undefined;
                node = node.next
            ) {
                if (node.next === undefined) {
                    node.next = n;
                    this.length++;
                    break;
                }
            }
        }
    }
    remove(item: T): T | undefined {
        for (
            let node: Node<T> | undefined = this.head;
            node !== undefined;
            node = node.next
        ) {
            if (node.next?.value === item) {
                console.log(node.next.value);
                const nodeToDelete = node.next;
                const next = node.next.next;
                node.next = next;
                if (next !== undefined) {
                    next.prev = node;
                }
                this.length--;
                return nodeToDelete.value;
            }
        }

        return undefined;
    }
    get(idx: number): T | undefined {
        if (idx > this.length - 1) {
            console.log("index is out of bounds or list is empty");
            return undefined;
        }
        if (idx === 0) {
            return this.head?.value;
        } else {
            for (
                let node: Node<T> | undefined = this.head, i = 0;
                node !== undefined;
                node = node.next, i++
            ) {
                if (i === idx) {
                    return node.value;
                }
            }
            return undefined;
        }
    }
    removeAt(idx: number): T | undefined {
        if (idx > this.length - 1) {
            console.log("index is out of bounds or list is empty");
            return undefined;
        }

        if (idx === 0) {
            const nodeToDelete = this.head;
            this.head = this.head?.next;
            if (this.head !== undefined) {
                this.head.prev = undefined;
            }
            return nodeToDelete?.value;
        }
        for (
            let node: Node<T> | undefined = this.head, i = 0;
            node !== undefined;
            node = node.next, i++
        ) {
            if (i === idx - 1) {
                const nodeToRemove = node.next;
                node.next = nodeToRemove?.next;
                if (node.next !== undefined) {
                    node.next.prev = node;
                }
                this.length--;
                return nodeToRemove?.value;
            }
        }
        return undefined;
    }
}

const list = new DoublyLinkedList();
list.prepend(5);
list.prepend(7);
list.append(10);
list.insertAt(20, 2);
list.remove(5);
list.removeAt(1);
// console.log("value at index 0", list.get(0));
// console.log(list);
console.dir(list, { depth: null });
// console.log(JSON.stringify(list, null, 2));
