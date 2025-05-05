type Node<T> = {
    value: T;
    next: Node<T> | undefined;
};
export default class SinglyLinkedList<T> {
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
        };
        return newNode;
    }

    prepend(item: T): void {
        const n = this.createNode(item);
        if (!this.head) {
            this.head = n;
        } else {
            const next = this.head;
            n.next = next;
            this.head = n;
        }
        this.length++;
    }
    insertAt(item: T, idx: number): void {
        const n = this.createNode(item);
        if (idx === 0) {
            this.prepend(item);
        } else if (idx > this.length - 1) {
            console.log("index is out of bounds");
        } else {
            for (
                let node: Node<T> | undefined = this.head, i = 0;
                node != undefined;
                node = node.next, i++
            ) {
                if (i === idx - 1) {
                    const next = node.next;
                    node.next = n;
                    node.next.next = next;
                    this.length++;
                    break;
                }
            }
        }
    }
    append(item: T): void {
        const n = this.createNode(item);
        if (!this.head) {
            this.head = n;
            this.length++;
        } else {
            for (
                let node: Node<T> | undefined = this.head;
                node !== undefined;
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
        if (this.head === undefined) {
            return undefined;
        } else {
            for (
                let node: Node<T> | undefined = this.head;
                node != undefined;
                node = node.next
            ) {
                if (node.value === item) {
                    this.head = node.next;
                    this.length--;
                    return item;
                }
                if (node.next === undefined) {
                    return undefined;
                }
                if (node.next.value === item) {
                    const next = node.next.next;
                    node.next = next;
                    this.length--;

                    return item;
                }
            }
            return undefined;
        }
    }
    get(idx: number): T | undefined {
        if (!this.head) {
            return undefined;
        } else if (idx > this.length - 1) {
            console.log("index is out of bounds");
            return undefined;
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
        if (this.head === undefined) {
            return undefined;
        }
        if (idx > this.length - 1) {
            console.log("index is out of bounds");
            return undefined;
        } else {
            for (
                let node: Node<T> | undefined = this.head, i = 0;
                node != undefined;
                node = node.next, i++
            ) {
                if (idx === 0) {
                    const next = node.next;
                    const deletedItem = node;
                    this.head = next;
                    this.length--;
                    return deletedItem?.value;
                }
                if (i === idx - 1) {
                    const next = node.next?.next;
                    const deletedItem = node.next;
                    node.next = next;
                    this.length--;
                    return deletedItem?.value;
                }
            }
            return undefined;
        }
    }
}

const list = new SinglyLinkedList();
// list.prepend(5);
// list.prepend(13);
list.append(5);
list.append(7);
list.append(9);
list.removeAt(1);
// list.insertAt(3, 2);
// list.remove(3);
// list.removeAt(0);
console.log(list);
console.log(JSON.stringify(list, null, 2));
// console.log(list.get(1));
