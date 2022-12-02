// import * as fs from "fs";

// fs.readFile("adventinputday2.txt", "utf8", (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }

//   // A is opponent rock
//   // B is opponent paper
//   // C is opponent scissors
//   // X Y Z is R P S but for you

//   let score = 0;

//   let game = data.split("\n").map((item) => [item[0], item[2]]);
//   //   console.log(game);
//   for (const round in game) {
//     const opponent = game[round][0];
//     // console.log(opponent);
//     const player = game[round][1];

//     const win = () => (score += 6);
//     const paper = () => (score += 2);
//     const rock = () => score++;
//     const scissors = () => (score += 3);
//     const draw = () => (score += 3);

//     switch (opponent) {
//       case "A":
//         switch (player) {
//           case "X":
//             rock();
//             draw();
//             break;
//           case "Y":
//             win();
//             paper();
//             break;
//           case "Z":
//             scissors();
//             break;
//         }
//         break;
//       case "B":
//         switch (player) {
//           case "X":
//             rock();
//             break;
//           case "Y":
//             paper();
//             draw();
//             break;
//           case "Z":
//             scissors();
//             win();
//             break;
//         }
//         break;

//       case "C":
//         switch (player) {
//           case "X":
//             rock();
//             win();
//             break;
//           case "Y":
//             paper();
//             break;
//           case "Z":
//             scissors();
//             draw();
//             break;
//         }
//         break;
//     }
//   }
//   console.log(game);
//   console.log(score);
// });

// PT 2 , X Lose Y Draw Z Win

import * as fs from "fs";

fs.readFile("adventinputday2.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // A is opponent rock
  // B is opponent paper
  // C is opponent scissors
  // PT 2 , X Lose Y Draw Z Win

  let score = 0;

  let game = data.split("\n").map((item) => [item[0], item[2]]);
  //   console.log(game);
  for (const round in game) {
    const opponent = game[round][0];
    // console.log(opponent);
    const outcome = game[round][1];

    const win = () => (score += 6);
    const paper = () => (score += 2);
    const rock = () => score++;
    const scissors = () => (score += 3);
    const draw = () => (score += 3);

    switch (opponent) {
      case "A":
        switch (outcome) {
          case "X":
            scissors();
            break;
          case "Y":
            draw();
            rock();
            break;
          case "Z":
            win();
            paper();
            break;
        }
        break;
      case "B":
        switch (outcome) {
          case "X":
            rock();
            break;
          case "Y":
            draw();
            paper();
            break;
          case "Z":
            win();
            scissors();
            break;
        }
        break;

      case "C":
        switch (outcome) {
          case "X":
            paper();
            break;
          case "Y":
            draw();
            scissors();
            break;
          case "Z":
            win();
            rock();
            break;
        }
        break;
    }
  }
  console.log(game);
  console.log(score);
});
