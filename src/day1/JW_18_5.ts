type NodeGraph2<T> = {
    value: T;
    next: NodeGraph2<T> | undefined;
};
class Queue2<T> {
    public length: number;
    private head: NodeGraph2<T> | undefined;
    private tail: NodeGraph2<T> | undefined;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }
    createNode(item: T): NodeGraph2<T> {
        const n: NodeGraph2<T> = {
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

class Vertex2 {
    public value: string;
    public adjacent_vertices: Array<Vertex>;
    constructor(value: string) {
        this.value = value;
        this.adjacent_vertices = [];
    }
    add_adjacent_vertex(vertex: Vertex) {
        this.adjacent_vertices.push(vertex);
    }
}

const idris = new Vertex2("idris");
const kamil = new Vertex2("kamil");
const talia = new Vertex2("talia");
const lina = new Vertex2("lina");
const ken = new Vertex2("ken");
const marco = new Vertex2("marco");
const sasha = new Vertex2("sasha");

idris.add_adjacent_vertex(kamil);
idris.add_adjacent_vertex(talia);

kamil.add_adjacent_vertex(lina);
kamil.add_adjacent_vertex(idris);

lina.add_adjacent_vertex(kamil);
lina.add_adjacent_vertex(sasha);

talia.add_adjacent_vertex(idris);
talia.add_adjacent_vertex(ken);

ken.add_adjacent_vertex(talia);
ken.add_adjacent_vertex(marco);

marco.add_adjacent_vertex(ken);
marco.add_adjacent_vertex(sasha);

function bfs2(
    starting_vertex: Vertex,
    search_value: string,
): Array<string> | undefined {
    const path: Array<string> = [];
    if (starting_vertex.value === search_value) {
        path.push(starting_vertex.value);
        return path;
    }
    const queue = new Queue2<Vertex>();
    const visited_vertices = new Map<string, boolean>();
    visited_vertices.set(starting_vertex.value, true);
    queue.enqueue(starting_vertex);
    while (queue.length > 0) {
        const current_vertex = queue.deque();
        if (!current_vertex) return undefined;
        path.push(current_vertex.value);
        console.log(
            "🚀 ~ bfs_traverse ~ current_vertex:",
            current_vertex.value,
        );
        for (let adjacent_vertex of current_vertex.adjacent_vertices) {
            if (visited_vertices.has(adjacent_vertex.value)) {
                continue;
            }
            if (adjacent_vertex.value === search_value) {
                path.push(adjacent_vertex.value);
                return path;
            }
            visited_vertices.set(adjacent_vertex.value, true);
            queue.enqueue(adjacent_vertex);
        }
    }
    return undefined;
}
console.log(bfs2(idris, "lina"));
