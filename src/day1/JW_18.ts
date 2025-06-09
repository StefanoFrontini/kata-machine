type NodeGraph<T> = {
    value: T;
    next: NodeGraph<T> | undefined;
};
class Queue<T> {
    public length: number;
    private head: NodeGraph<T> | undefined;
    private tail: NodeGraph<T> | undefined;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }
    createNode(item: T): NodeGraph<T> {
        const n: NodeGraph<T> = {
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

class Vertex {
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

function dfs_traverse(vertex: Vertex, visited_vertices = new Map()) {
    visited_vertices.set(vertex.value, true);
    console.log(vertex.value);
    for (let adjacent_vertex of vertex.adjacent_vertices) {
        if (visited_vertices.has(adjacent_vertex.value)) {
            continue;
        } else {
            dfs_traverse(adjacent_vertex, visited_vertices);
        }
    }
}

// const r = dfs(alice, "bob");
// console.log(r);

//      (1) --- (4) ---- (5)
//    /  |       |       /|
// (0)   | ------|------- |
//    \  |/      |        |
//      (2) --- (3) ---- (6)

const zero = new Vertex("zero");
const one = new Vertex("one");
const two = new Vertex("two");
const three = new Vertex("three");
const four = new Vertex("four");
const five = new Vertex("five");
const six = new Vertex("six");

zero.add_adjacent_vertex(one);
zero.add_adjacent_vertex(two);

one.add_adjacent_vertex(zero);
one.add_adjacent_vertex(two);
one.add_adjacent_vertex(four);

two.add_adjacent_vertex(one);
two.add_adjacent_vertex(three);
two.add_adjacent_vertex(zero);

three.add_adjacent_vertex(two);
three.add_adjacent_vertex(four);

three.add_adjacent_vertex(six);
four.add_adjacent_vertex(one);
four.add_adjacent_vertex(three);
four.add_adjacent_vertex(five);

five.add_adjacent_vertex(six);
five.add_adjacent_vertex(four);
five.add_adjacent_vertex(two);

six.add_adjacent_vertex(three);
six.add_adjacent_vertex(five);
// const r = dfs(six, "two");
// console.log("🚀 ~ r:", r);

//          (Alice)
//   /      /      \         \
// (Bob) (Candy) (Derek) - (Elaine)
//  |        /     |
// (Fred)   /    (Gina)
//  |      /       |
//  (Helen)      (Irena)

const alice = new Vertex("alice");
const bob = new Vertex("bob");
const candy = new Vertex("candy");
const derek = new Vertex("derek");
const elaine = new Vertex("elaine");
const fred = new Vertex("fred");
const helen = new Vertex("helen");
const gina = new Vertex("gina");
const irena = new Vertex("irena");

alice.add_adjacent_vertex(bob);
alice.add_adjacent_vertex(candy);
alice.add_adjacent_vertex(derek);
alice.add_adjacent_vertex(elaine);

bob.add_adjacent_vertex(alice);
bob.add_adjacent_vertex(fred);

candy.add_adjacent_vertex(alice);
candy.add_adjacent_vertex(helen);

derek.add_adjacent_vertex(alice);
derek.add_adjacent_vertex(elaine);
derek.add_adjacent_vertex(gina);

elaine.add_adjacent_vertex(alice);
elaine.add_adjacent_vertex(derek);

fred.add_adjacent_vertex(bob);
fred.add_adjacent_vertex(helen);

helen.add_adjacent_vertex(fred);
helen.add_adjacent_vertex(candy);

gina.add_adjacent_vertex(derek);
gina.add_adjacent_vertex(irena);

irena.add_adjacent_vertex(gina);

const r = dfs(alice, "irena");
console.log("🚀 ~ r:", r);
console.log("dfs_traverse:");
dfs_traverse(irena);

function bfs_traverse(starting_vertex: Vertex) {
    const queue = new Queue<Vertex>();
    const visited_vertices = new Map<string, boolean>();
    visited_vertices.set(starting_vertex.value, true);
    queue.enqueue(starting_vertex);
    while (queue.length > 0) {
        const current_vertex = queue.deque();
        if (!current_vertex) return;
        console.log(
            "🚀 ~ bfs_traverse ~ current_vertex:",
            current_vertex.value,
        );
        for (let adjacent_vertex of current_vertex.adjacent_vertices) {
            if (visited_vertices.has(adjacent_vertex.value)) {
                continue;
            }
            visited_vertices.set(adjacent_vertex.value, true);
            queue.enqueue(adjacent_vertex);
        }
    }
}
function bfs(
    starting_vertex: Vertex,
    search_value: string,
): Array<string> | undefined {
    const path: Array<string> = [];
    if (starting_vertex.value === search_value) {
        path.push(starting_vertex.value);
        return path;
    }
    const queue = new Queue<Vertex>();
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

function dfs(
    vertex: Vertex,
    search_value: string,
    visited_vertices = new Map(),
    path: Array<string> = [],
): Array<string> | undefined {
    visited_vertices.set(vertex.value, true);
    console.log(`Pushing ${vertex.value} to ${path}`);
    path.push(vertex.value);
    if (vertex.value === search_value) {
        return path;
    }

    for (let adjacent_vertex of vertex.adjacent_vertices) {
        if (visited_vertices.has(adjacent_vertex.value)) {
            continue;
        }
        if (adjacent_vertex.value === search_value) {
            path.push(adjacent_vertex.value);
            return path;
        }
        const vertex_were_searching_for: Array<string> | undefined = dfs(
            adjacent_vertex,
            search_value,
            visited_vertices,
            path,
        );
        if (vertex_were_searching_for) return vertex_were_searching_for;
    }
    console.log(`Popping ${vertex.value} from ${path}`);
    path.pop();
    return undefined;
}
console.log("bfs_traverse:");
bfs_traverse(irena);

const res = bfs(elaine, "helen");
console.log("🚀 ~ res:", res);
