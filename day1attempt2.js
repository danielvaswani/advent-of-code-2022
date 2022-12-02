import * as fs from "fs";

fs.readFile("adventinputday1.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  let numbers = data
    .split("\n\n")
    .map((item) => item.split("\n").map((num) => parseInt(num)));
  // .join(" ")
  // .split("  ")
  console.log(numbers);

  // .map((item) => item.split(" ").map((num) => parseInt(num)));

  //   const summedNumbers = numbers.map((numArray) =>
  //     numArray.reduce((partialSum, a) => partialSum + a, 0)
  //   );

  //   const largestNumber = summedNumbers.sort((a, b) => (a < b ? 1 : -1))[0];
  //   console.log(`largest elf sum:  ${largestNumbersSum}`);

  //   const largestNumbersSum = summedNumbers
  //     .sort((a, b) => (a < b ? 1 : -1))
  //     .slice(0, 3)
  //     .reduce((partialSum, a) => partialSum + a, 0);

  //   console.log(`largest 3 elf sum:  ${largestNumbersSum}`);
});
