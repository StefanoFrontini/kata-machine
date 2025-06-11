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
    let unvisited_cities: Array<City> = [];
    const visited_cities = new Map<string, boolean>();
    cheapest_prices_table.set(starting_city.name, 0);
    let current_city: City | undefined = starting_city;
    while (current_city) {
        visited_cities.set(current_city.name, true);
        const indexToDelete = unvisited_cities.findIndex(
            (el) => el.name === current_city?.name,
        );
        if (indexToDelete !== -1) {
            unvisited_cities.splice(indexToDelete, 1);
        }
        for (const [adjacent_city, price] of current_city.routes) {
            if (visited_cities.has(adjacent_city.name)) {
                continue;
            }
            unvisited_cities.push(adjacent_city);
            const price_current_city = cheapest_prices_table.get(
                current_city.name,
            );

            if (price_current_city === undefined) {
                throw Error("!price_current_city");
            }
            const price_through_current_city = price_current_city + price;
            const cheapest_price_adjacent_city = cheapest_prices_table.get(
                adjacent_city.name,
            );
            if (
                cheapest_price_adjacent_city === undefined ||
                (cheapest_price_adjacent_city !== undefined &&
                    price_through_current_city < cheapest_price_adjacent_city)
            ) {
                cheapest_prices_table.set(
                    adjacent_city.name,
                    price_through_current_city,
                );
                cheapest_previous_stopover_city_table.set(
                    adjacent_city.name,
                    current_city.name,
                );
            }
        }
        current_city = findMinPrice(unvisited_cities, cheapest_prices_table);
    }
    const shortest_path: string[] = [];
    let current_city_name = final_destination.name;
    while (current_city_name !== starting_city.name) {
        shortest_path.push(current_city_name);
        current_city_name =
            cheapest_previous_stopover_city_table.get(current_city_name);
    }
    shortest_path.push(starting_city.name);
    for (const [c, p] of cheapest_prices_table) {
        console.log(`${c} - ${p}`);
    }
    return shortest_path.reverse();
}

const s_path = dijkstra_shortest_path(atlanta, el_paso);
console.log("🚀 ~ s_path:", s_path);

function findMinPrice(
    arr: Array<City>,
    cheapest_price_table: Map<string, number>,
) {
    let result: City | undefined = undefined;
    let min_price = Infinity;
    for (let city of arr) {
        const price = cheapest_price_table.get(city.name);
        if (price && price < min_price) {
            result = city;
            min_price = price;
        }
    }
    return result;
}
