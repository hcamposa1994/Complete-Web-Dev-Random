import fs from "fs";

const q1 = () => {
  fs.readFile("./instructions.txt", (err, data) => {
    console.time("santa-time");
    const directions = data.toString();
    const directionsArray = directions.split("");
    const answer = directionsArray.reduce((acc, currentValue) => {
      if (currentValue === "(") {
        return (acc += 1);
      } else if (currentValue === ")") {
        return (acc -= 1);
      }
    }, 0);
    console.timeEnd("santa-time");
    console.log("floor", answer);
  });
};

q1();

const q2 = () => {
  fs.readFile("./instructions.txt", (err, data) => {
    console.time("santa-time");
    const directions = data.toString();
    const directionsArray = directions.split("");
    let accumulator = 0;
    let counter = 0;
    const answer = directionsArray.some((currentItem) => {
      if (currentItem === "(") {
        accumulator += 1;
      } else if (currentItem === ")") {
        accumulator -= 1;
      }
      counter++;
      return accumulator < 0;
    });
    console.timeEnd("santa-time");
    console.log("basement entered at: ", counter);
  });
};

q2();
