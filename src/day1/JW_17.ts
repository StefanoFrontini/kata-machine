type TrieNode = {
    children: Map<string, TrieNode | undefined>;
};

class Trie2 {
    public root: TrieNode;

    constructor() {
        this.root = {
            children: new Map(),
        };
    }

    search(word: string) {
        let currentNode: TrieNode = this.root;
        for (let char of word) {
            if (currentNode.children.has(char)) {
                const node = currentNode.children.get(char);
                if (node) {
                    currentNode = node;
                }
            } else {
                return undefined;
            }
        }
        return currentNode;
    }
    search2(word: string) {
        let currentNode: TrieNode = this.root;
        let result = "";
        for (let char of word) {
            if (currentNode.children.has(char)) {
                const node = currentNode.children.get(char);
                if (node) {
                    currentNode = node;
                    result += char;
                }
            } else {
                return undefined;
            }
        }
        return result;
    }
    autocorrect(word: string) {
        let currentNode: TrieNode = this.root;
        let wordFoundSoFar = "";
        for (let char of word) {
            if (currentNode.children.has(char)) {
                const node = currentNode.children.get(char);
                if (node) {
                    currentNode = node;
                    wordFoundSoFar += char;
                }
            } else {
                return wordFoundSoFar + this.collectAllWords(currentNode)[0];
            }
        }
        return word;
    }
    insert(word: string) {
        let currentNode = this.root;
        for (let char of word) {
            if (currentNode.children.has(char)) {
                const node = currentNode.children.get(char);
                if (node) {
                    currentNode = node;
                }
            } else {
                const newNode: TrieNode = {
                    children: new Map(),
                };
                currentNode.children.set(char, newNode);
                currentNode = newNode;
            }
        }
        currentNode.children.set("*", undefined);
    }
    collectAllWords(node = this.root, word = "", words: string[] = []) {
        let currentNode = node;
        for (const [key, childNode] of currentNode.children) {
            if (key === "*") {
                words.push(word);
            } else {
                this.collectAllWords(childNode, word + key, words);
            }
        }
        return words;
    }
    autocomplete(prefix: string) {
        let currentNode = this.search(prefix);
        if (!currentNode) return undefined;
        return this.collectAllWords(currentNode);
    }
    print(node = this.root) {
        let currentNode = node;
        for (const [key, childNode] of currentNode.children) {
            console.log(key);
            if (key !== "*") {
                this.print(childNode);
            }
            // if (!childNode) {
            //     continue;
            // } else {
            //     this.print(childNode);
            // }
        }
    }
}
const trie = new Trie2();
trie.insert("can");
trie.insert("cannot");
trie.insert("stefano");
const result = trie.autocorrect("cannotttta");
// const result = trie.search2("can");
console.log("🚀 ~ result:", result);
// const words = trie.collectAllWords();
// const words = trie.autocomplete("ca");
// console.log("🚀 ~ words:", words);
// trie.print();
