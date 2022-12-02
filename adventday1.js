import * as fs from "fs";

let newData = [];

fs.readFile("adventinputday1.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  newData = data.split("\n");
  newData = newData.join(" ").split("  ");
  newData = newData.map((item) => item.split(" "));

  let numbers = [];
  newData.forEach((item) => {
    let newItem = [];
    newItem.push(item.map((texts) => parseInt(texts)));
    numbers.push(...newItem);
  });
  console.log(numbers);

  let summedNumbers = numbers.map((numArray) =>
    numArray.reduce((partialSum, a) => partialSum + a, 0)
  );

  //   const largestNumber = summedNumbers.sort((a, b) => (a < b ? 1 : -1))[0];

  const largestNumbers = summedNumbers
    .sort((a, b) => (a < b ? 1 : -1))
    .slice(0, 3);

  //   console.log(largestNumber);
  console.log(
    `top 3 elves have a total of ${largestNumbers.reduce(
      (partialSum, a) => partialSum + a,
      0
    )}`
  );
});
