import { time } from "console";
import fs from "fs";
// santa trying to deliver presents to large apartments
// can't find the right floor
// directions confusing

// start on ground floor - floor 0
// then follows instructions one character at a time

// start at floor 0
// `(` = go UP one floor
// `)` = go DOWN one floor

// building is very tall, and basement is very deep
// santa will never fing the top or bottom floors
// const checkPos = (count, pos, i) => {
//   if (count === pos) {
//     return i;
//   }
// };

// const findPos = (string, count = 0, pos) => {
//   let answer = 0;
//   for (let i = 0; i < string.length; i++) {
//     const element = string[i];
//     if (element === "(") {
//       answer = checkPos(count, pos, i);
//       count++;
//       break;
//     } else {
//       answer = checkPos(count, pos, i);
//       count--;
//       break;
//     }
//   }
//   return answer;
// };
fs.readFile("./instructions.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  const steps = data.toString();
  // Problem 1
  //   console.time("q1");

  //   const ascendingFloors = steps.match(/[(]/g).length;
  //   const descendingFloors = steps.match(/[)]/g).length;
  //   console.log(ascendingFloors - descendingFloors);
  //   console.timeEnd("q1");

  // Problem 2
  let count = 0;

  //   console.log(findPos(steps, count, -1));
  console.time("p2");
  for (let i = 0; i < steps.length; i++) {
    const element = steps[i];
    if (element === "(") {
      if (count === -1) {
        console.log(i);
        break;
      }
      count++;
    } else {
      if (count === -1) {
        console.log(i);
        break;
      }
      count--;
    }
  }
  console.timeEnd("p2");
});
