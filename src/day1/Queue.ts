type Node<T> = {
    value: T;
    next: Node<T> | undefined;
};
export default class Queue<T> {
    public length: number;
    private head: Node<T> | undefined;
    private tail: Node<T> | undefined;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }
    createNode(item: T): Node<T> {
        const n: Node<T> = {
            value: item,
            next: undefined,
        };
        return n;
    }

    enqueue(item: T): void {
        const n = this.createNode(item);
        if (this.tail === undefined) {
            this.head = this.tail = n;
        } else {
            this.tail.next = n;
            this.tail = n;
        }
        this.length++;
    }
    deque(): T | undefined {
        if (this.head === undefined) {
            return undefined;
        } else if (this.head.next === undefined) {
            const head = this.head;
            this.head = this.tail = undefined;
            this.length--;
            return head.value;
        } else {
            const head = this.head;
            const next = this.head.next;
            this.head = next;
            this.length--;
            return head.value;
        }
    }
    peek(): T | undefined {
        if (this.head === undefined) {
            return undefined;
        } else {
            return this.head.value;
        }
    }
}

const q = new Queue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.deque();
q.enqueue(40);
const head_number = q.peek();
console.log("head number: ", head_number);
console.log(JSON.stringify(q, null, 2));
