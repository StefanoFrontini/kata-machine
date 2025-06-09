class City {
    public name: string;
    public routes: Map<City, number>;
    constructor(name: string) {
        this.name = name;
        this.routes = new Map();
    }
    add_route(city: City, price: number) {
        this.routes.set(city, price);
    }
}
const atlanta = new City("Atlanta");
const boston = new City("Boston");
const chicago = new City("Chicago");
const denver = new City("Denver");
const el_paso = new City("El Paso");

atlanta.add_route(boston, 100);
atlanta.add_route(denver, 160);

boston.add_route(chicago, 120);
boston.add_route(denver, 180);

chicago.add_route(el_paso, 80);

denver.add_route(chicago, 40);
denver.add_route(el_paso, 140);

function dijkstra_shortest_path(starting_city: City, final_destination: City) {
    const cheapest_prices_table = new Map<string, number>();
    const cheapest_previous_stopover_city_table = new Map();
    const unvisited_cities = [];
    const visited_cities = new Map();
    cheapest_prices_table.set(starting_city.name, 0);
}
