// ES2020

// Big Int

typeof BigInt;

// Optional Chaining Operator

let will_pokemon = {
  pikachu: {
    species: "mouse pokemon",
    height: 0.4,
    weight: 6,
  },
};

let alex_pokemon = {
  pikachu: {
    species: "mouse pokemon",
    height: 0.8,
    weight: 30,
    power: 0,
  },
};
//   OLD METHOD
// if (alex_pokemon.pikachu && alex_pokemon.pikachu.weight) {
//   let weight2 = alex_pokemon.pikachu.weight;
//   console.log(weight2);
// } else {
//   let weight2 = undefined;
//   console.log(weight2);
// }

// NEW METHOD - SAME THING AS ABOVE
let weight3 = alex_pokemon?.pikachu?.weight;
console.log(weight3);

//Nullish Coalescing Operator
let power = alex_pokemon?.pikachu?.power ?? `no power`;
console.log(power);