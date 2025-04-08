type Node = {
    children: Array<Node | undefined>;
    isWord: boolean;
};
export default class Trie {
    public head: Node | undefined;

    constructor() {
        this.head = undefined;
    }
    createNode(): Node {
        const n = {
            children: [],
            isWord: false,
        };
        return n;
    }
    getIndex(str: string) {
        const zero = "a".charCodeAt(0);
        return str.charCodeAt(0) - zero;
    }

    getLetterFromIndex(idx: number): string {
        const zero = "a".charCodeAt(0);
        return String.fromCharCode(zero + idx);
    }

    insert(str: string): void {
        const newNode = this.createNode();
        if (!this.head) {
            this.head = newNode;
        }
        let curr = this.head;
        for (let c of str) {
            const idx = this.getIndex(c);
            if (curr.children[idx]) {
                curr = curr.children[idx];
            } else {
                const n = this.createNode();
                curr.children[idx] = n;
                curr = n;
            }
        }
        curr.isWord = true;
    }
    deleteItem(curr: Node, item: string, count: number): void {
        if (count === item.length) {
            return;
        }

        for (let i = 0; i < curr.children.length; i++) {
            if (
                curr.children[i] &&
                this.getLetterFromIndex(i) === item[count]
            ) {
                count++;
                this.deleteItem(curr.children[i] as Node, item, count);
                curr.children[i]!.isWord = false;
                const hasNoChildren = curr.children[i]?.children.every(
                    (el) => el === undefined || el === null,
                );
                if (hasNoChildren) {
                    curr.children[i] = undefined;
                }
                return;
            }
        }
        throw new Error("item not found");
    }
    delete(item: string): void {
        if (!this.head) {
            throw new Error("Trie is empty");
        }
        let curr = this.head;
        this.deleteItem(curr, item, 0);
    }
    walk(
        curr: Node | undefined,
        word: string,
        words: string[],
        partial: string,
    ): string[] {
        if (!curr) {
            return [];
        }
        if (curr.isWord) {
            words.push(partial + word);
        }
        if (curr.children.length === 0) {
            return words;
        }
        for (let i = 0; i < curr.children.length; i++) {
            if (curr.children[i]) {
                this.walk(
                    curr.children[i],
                    word + this.getLetterFromIndex(i),
                    words,
                    partial,
                );
            }
        }
        return words;
    }
    find(partial: string): string[] {
        if (!this.head) {
            return [];
        }
        let curr = this.head;
        for (let c of partial) {
            const idx = this.getIndex(c);
            if (curr.children[idx]) {
                curr = curr.children[idx];
            } else {
                return [];
            }
        }
        return this.walk(curr, "", [], partial);
    }
}

const trie = new Trie();
trie.insert("ste");
trie.insert("str");
trie.insert("sas");
trie.delete("ste");
const prefix = "s";
const result = trie.find(prefix);
console.log("result:", result);
// console.log(JSON.stringify(trie, null, 2));
