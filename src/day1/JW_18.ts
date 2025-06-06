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
const alice = new Vertex("alice");
const bob = new Vertex("bob");
const cynthia = new Vertex("cynthia");

alice.add_adjacent_vertex(bob);
alice.add_adjacent_vertex(cynthia);
bob.add_adjacent_vertex(cynthia);
cynthia.add_adjacent_vertex(bob);

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
console.log("alice: ");
dfs_traverse(alice);
console.log("bob: ");
dfs_traverse(bob);
console.log("cynthia: ");
dfs_traverse(cynthia);
