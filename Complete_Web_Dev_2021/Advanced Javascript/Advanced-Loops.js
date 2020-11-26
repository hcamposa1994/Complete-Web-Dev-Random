const basket = [`apples`, `oranges`, `grapes`];
const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000,
};

// 1
for (let i = 0; i < basket.length; i++) {
  console.log(basket[i]);
}

// 2
basket.forEach((item) => {
  console.log(item);
});

//3
basket.map((item) => {
  console.log(item);
});

// for of
// Iterating - arrays, strings
for (const item of basket) {
  console.log(item);
}

// for in
// enumerating - objects
for (item in detailedBasket) {
  console.log(item);
}

for (const item in detailedBasket) {
  if (detailedBasket.hasOwnProperty(item)) {
    console.log(detailedBasket[item]);
  }
}
