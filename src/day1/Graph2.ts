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
console.log(alice.adjacent_vertices);
