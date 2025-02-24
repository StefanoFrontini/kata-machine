type Node<T> = {
    value: T;
    next: Node<T> | undefined;
};
export default class Stack<T> {
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

    push(item: T): void {
        const n = this.createNode(item);
        if (this.head === undefined) {
            this.head = n;
        } else {
            n.next = this.head;
            this.head = n;
        }
        this.length++;
    }
    pop(): T | undefined {
        if (this.head === undefined) {
            console.log("Cannot pop, stack is empty");
            return undefined;
        } else {
            const head = this.head;
            this.head = head.next;
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

const s = new Stack();
s.push(10);
s.push(20);
s.pop();
const head = s.peek();
console.log("head: ", head);
console.log(JSON.stringify(s, null, 2));
