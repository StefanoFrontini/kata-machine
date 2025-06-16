type Profile = {
    first_name: string;
    last_name: string;
};
function isPlayingBothSport(players1: Profile[], players2: Profile[]) {
    const result: string[] = [];
    const playersMap = new Map<string, boolean>();
    for (let player of players2) {
        playersMap.set(player.first_name + player.last_name, true);
    }
    for (let player of players1) {
        if (playersMap.has(player.first_name + player.last_name)) {
            result.push(player.first_name + player.last_name);
        }
    }
    return result;
}
const basketball_players = [
    {
        first_name: "Jill",
        last_name: "Huang",
    },
    {
        first_name: "Janko",
        last_name: "Barton",
    },
    {
        first_name: "Wanda",
        last_name: "Vakulskas",
    },
    {
        first_name: "Jill",
        last_name: "Moloney",
    },
    {
        first_name: "Luuk",
        last_name: "Watkins",
    },
];

const football_players = [
    {
        first_name: "Hanzla",
        last_name: "Radosti",
    },
    {
        first_name: "Tina",
        last_name: "Watkins",
    },
    {
        first_name: "Alex",
        last_name: "Patel",
    },
    {
        first_name: "Jill",
        last_name: "Huang",
    },
    {
        first_name: "Wanda",
        last_name: "Vakulskas",
    },
];

console.log(isPlayingBothSport(basketball_players, football_players));
