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
}
